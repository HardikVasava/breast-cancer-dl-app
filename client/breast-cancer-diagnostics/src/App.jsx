import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const defaultData = {
    "mean radius": 14.5,
    "mean texture": 19.2,
    "mean perimeter": 94.3,
    "mean area": 616.5,
    "mean smoothness": 0.09,
    "mean compactness": 0.127,
    "mean concavity": 0.124,
    "mean concave points": 0.091,
    "mean symmetry": 0.181,
    "mean fractal dimension": 0.062,
    "radius error": 0.58,
    "texture error": 1.25,
    "perimeter error": 3.41,
    "area error": 33.9,
    "smoothness error": 0.005,
    "compactness error": 0.008,
    "concavity error": 0.019,
    "concave points error": 0.017,
    "symmetry error": 0.021,
    "fractal dimension error": 0.003,
    "worst radius": 18.1,
    "worst texture": 25.3,
    "worst perimeter": 123.0,
    "worst area": 951.0,
    "worst smoothness": 0.135,
    "worst compactness": 0.256,
    "worst concavity": 0.31,
    "worst concave points": 0.265,
    "worst symmetry": 0.223,
    "worst fractal dimension": 0.092,
    "benign_0__mal_1": 0,
  };

  const [formData, setFormData] = useState(defaultData);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await axios.post("http://localhost:5000/predict", formData);
      setResult(response.data);
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white border border-gray-200 rounded-xl shadow-md p-8 space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center">
          🏥 Breast Cancer Prediction
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(formData).map((key) => (
            <div key={key} className="flex flex-col">
              <label htmlFor={key} className="text-gray-700 font-medium mb-2">
                {key.replace(/_/g, " ")}
              </label>
              <input
                id={key}
                name={key}
                type="number"
                step="any"
                value={formData[key]}
                onChange={handleChange}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          ))}

          <div className="col-span-full flex justify-center mt-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-200 disabled:opacity-50"
            >
              {loading ? "Predicting..." : "Predict"}
            </button>
          </div>
        </form>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong className="font-bold">Error:</strong> <span>{error}</span>
          </div>
        )}

        {result && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-4 rounded-md">
            <h2 className="text-2xl font-semibold mb-2">Prediction Result</h2>
            <p className="text-lg">
              Predicted Class:{" "}
              <span
                className={
                  result.predicted_class === 1
                    ? "text-red-600 font-bold"
                    : "text-green-600 font-bold"
                }
              >
                {result.predicted_class === 1 ? "Malignant (1)" : "Benign (0)"}
              </span>
            </p>
            {result.probability_default !== undefined &&
              result.probability_repaid !== undefined && (
                <div className="mt-3 space-y-1">
                  <p>Probability Default: {(result.probability_default * 100).toFixed(2)}%</p>
                  <p>Probability Repaid: {(result.probability_repaid * 100).toFixed(2)}%</p>
                </div>
              )}
          </div>
        )}
      </div>
    </div>
  );
}
