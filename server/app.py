from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
import joblib
import numpy as np
import pandas as pd

model = load_model('../model-training/models/breast_cancer_diagnostics_model.keras')
scaler = joblib.load('../model-training/models/breast_cancer_diagnostics_scaler.pkl')

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return jsonify({"message": "Breast Cancer Prediction API is live!"})

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    if not data:
        return jsonify({'error': 'No input data provided'}), 400

    try:
        feature_order = [
            'mean radius', 'mean texture', 'mean perimeter', 'mean area', 'mean smoothness', 
            'mean compactness', 'mean concavity', 'mean concave points', 'mean symmetry', 
            'mean fractal dimension', 'radius error', 'texture error', 'perimeter error', 'area error',
            'smoothness error', 'compactness error', 'concavity error', 'concave points error',
            'symmetry error', 'fractal dimension error', 'worst radius', 'worst texture', 'worst perimeter',
            'worst area', 'worst smoothness', 'worst compactness', 'worst concavity', 'worst concave points',
            'worst symmetry', 'worst fractal dimension'
        ]

        applicant = pd.DataFrame([data])
        applicant = applicant.reindex(columns=feature_order, fill_value=0)

        applicant_scaled = scaler.transform(applicant)

        prediction = model.predict(applicant_scaled)
        predicted_class = int(np.ravel(prediction)[0])

        if hasattr(model, 'predict_proba'):
            prediction_proba = model.predict_proba(applicant_scaled)
            return jsonify({
                "predicted_class": predicted_class,
                "probability_benign": float(prediction_proba[0][0]),
                "probability_malignant": float(prediction_proba[0][1])
            })
        else:
            return jsonify({"predicted_class": predicted_class})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
