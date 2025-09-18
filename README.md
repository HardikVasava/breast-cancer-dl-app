# 🩺 Breast Cancer Diagnostics Deep Learning App

A comprehensive machine learning application that predicts whether a breast tumor is benign or malignant using deep learning. This project combines data science, web development, and business intelligence to create an end-to-end solution for breast cancer diagnosis assistance.

## 📋 Table of Contents

- [Overview](#overview)
- [Dataset](#dataset)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Power BI Dashboard](#power-bi-dashboard)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)


## 🔍 Overview

This project uses the Breast Cancer Wisconsin (Diagnostic) dataset to train a deep neural network that can classify breast tumors as benign or malignant based on features extracted from digitized images of fine needle aspirate (FNA) of breast masses. The solution includes:

- **Data Analysis & Visualization**: Comprehensive EDA with Python and Power BI
- **Deep Learning Model**: TensorFlow/Keras neural network with regularization
- **REST API**: Flask backend for serving predictions
- **Web Interface**: React frontend with modern UI/UX
- **Business Intelligence**: Power BI dashboard for insights and monitoring

## 📂 Dataset

The project uses the **Breast Cancer Wisconsin (Diagnostic)** dataset containing:
- **569 instances** of breast mass data
- **30 numeric features** describing cell nuclei characteristics
- **Binary classification**: Benign (0) or Malignant (1)

Features include measurements like:
- Mean Radius, Texture, Perimeter, Area
- Smoothness, Compactness, Concavity
- Symmetry, Fractal Dimension
- And their standard error and "worst" values

*Dataset source: [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/Breast+Cancer+Wisconsin+%28Diagnostic%29)*

## 🔧 Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Data Analysis** | pandas, numpy, matplotlib, seaborn |
| **Machine Learning** | TensorFlow/Keras, scikit-learn |
| **Backend API** | Flask, joblib |
| **Frontend** | ReactJS, Axios, TailwindCSS |
| **Business Intelligence** | Power BI |
| **Deployment** | Python, Node.js |


## ✨ Features

### 🧑‍🏫 Data Analysis & Preprocessing
- Comprehensive exploratory data analysis
- Feature correlation analysis and visualization
- Data quality assessment and cleaning
- Feature scaling using MinMaxScaler
- Train/test split with stratification

### 🤖 Deep Learning Model
- Sequential neural network architecture
- Multiple hidden layers with ReLU activation
- Dropout regularization to prevent overfitting
- Binary classification with sigmoid output
- Early stopping for optimal training
- Model evaluation with multiple metrics

### 🌐 Web Application
- **Flask REST API** for model predictions
- **React frontend** with intuitive user interface
- **Real-time predictions** with confidence scores
- **Responsive design** using TailwindCSS
- **Form validation** and error handling

### 📊 Business Intelligence
- **Power BI dashboard** with interactive visualizations
- **Key performance indicators** and metrics
- **Data exploration** tools for stakeholders
- **Model monitoring** and performance tracking

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Node.js 14+
- Power BI Desktop (for dashboard)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HardikVasava/breast-cancer-dl-app.git
   cd breast-cancer-dl-app
   ```

2. **Set up the Python environment**
   ```bash
   cd server
   pip install -r requirements.txt
   ```

3. **Install React dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Download the dataset**
   - Download the breast cancer dataset from UCI repository
   - Place it in the `data/` directory as `breast_cancer_data.csv`

### Training the Model

1. **Run the training notebooks**
   ```bash
   cd model-training
   jupyter notebook
   ```

2. **Execute notebooks in order:**
   - `data_exploration.ipynb` - For EDA and insights
   - `model_training.ipynb` - To train and save the model
   - `model_evaluation.ipynb` - For performance analysis

### Running the Application

1. **Start the Flask backend**
   ```bash
   cd server
   python app.py
   ```
   The API will be available at `http://localhost:5000`

2. **Start the React frontend**
   ```bash
   cd client
   npm start
   ```
   The web app will be available at `http://localhost:3000`

3. **Open Power BI Dashboard**
   - Open Power BI Desktop
   - Load `power-bi/cancer_diagnostics.pbix`
   - Refresh data connections if needed


### Model Architecture
```
Sequential Model:
├── Input Layer (30 features)
├── Dense Layer (64 units, ReLU)
├── Dropout (0.3)
├── Dense Layer (32 units, ReLU)
├── Dropout (0.3)
└── Output Layer (1 unit, Sigmoid)
```

## 📊 Power BI Dashboard

### Key Metrics & Visuals

**DAX Measures:**
- `Total Patients = COUNTROWS('CancerData')`
- `Malignancy Rate = DIVIDE([Total Malignant], [Total Patients])`
- `Diagnosis = IF('CancerData'[benign_0__mal_1] = 1, "Malignant", "Benign")`

**Dashboard Components:**
- **Card Visuals**: Total patients, malignant cases, malignancy rate
- **Donut Chart**: Distribution of benign vs malignant cases
- **Bar Charts**: Feature analysis by diagnosis
- **Data Tables**: Detailed patient information
- **Interactive Slicers**: Filter by diagnosis and features

### Business Insights
- Understand class distribution and potential bias
- Identify key diagnostic features and patterns
- Monitor model performance over time
- Support clinical decision-making with data visualization

## 🔌 API Documentation

### Prediction Endpoint

**POST** `/predict`

**Request Body:**
```json
{
  "mean_radius": 14.127,
  "mean_texture": 20.652,
  "mean_perimeter": 90.2,
  "mean_area": 577.9,
  "mean_smoothness": 0.1189,
  // ... other 25 features
}
```

**Response:**
```json
{
  "prediction": 0,
  "prediction_proba": 0.923,
  "diagnosis": "Benign",
  "confidence": "High"
}
```

**Response Codes:**
- `200`: Successful prediction
- `400`: Invalid input data
- `500`: Server error

## 🧪 Sample Usage

### Web Interface
1. Navigate to the prediction form
2. Enter diagnostic feature values
3. Click "Predict"
4. View results with confidence score

### API Usage
```python
import requests

data = {
    "mean_radius": 13.54,
    "mean_texture": 14.36,
    # ... include all 30 features
}

response = requests.post('http://localhost:5000/predict', json=data)
result = response.json()
print(f"Prediction: {result['diagnosis']}")
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow PEP 8 for Python code
- Use ESLint configuration for JavaScript
- Write unit tests for new features
- Update documentation for API changes

## ⚠️ Disclaimer

This application is for educational and research purposes only. It should not be used as a substitute for professional medical diagnosis or treatment. Always consult with qualified healthcare providers for medical decisions.


## 🙏 Acknowledgments

- UCI Machine Learning Repository for the dataset
- The open-source community for the amazing tools and libraries
- Healthcare professionals working tirelessly in cancer diagnosis and treatment


---

**Happy coding and best of luck with your impactful breast cancer diagnostics project!** 🚀

*Made with ❤️ for advancing healthcare through technology*