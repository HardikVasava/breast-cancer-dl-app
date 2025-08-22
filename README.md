# 🩺 Breast Cancer Diagnostics DL App

This project predicts whether a breast tumor is benign or malignant using a deep learning model trained on breast cancer diagnostic data. The model is built with TensorFlow/Keras to classify tumors based on extracted features. The project includes data exploration, preprocessing, model training, a Power BI dashboard for business insights, and deploying a prediction API with Flask. The frontend is created using ReactJS with Axios for API integration and styled with TailwindCSS.

---

## 📂 Dataset

This project uses the Breast Cancer Wisconsin (Diagnostic) dataset containing numeric features extracted from digitized images of fine needle aspirate (FNA) of breast masses. The features describe characteristics of the cell nuclei present in the image and are used to classify tumors as benign or malignant.

The dataset can be found in public repositories such as the UCI Machine Learning Repository.

---

## 🔧 Tech Stack

- Data Analysis & Visualization: pandas, numpy, matplotlib, seaborn, power BI
- Modeling: TensorFlow/Keras  
- Backend: Flask (for serving the prediction API)  
- Frontend: ReactJS, Axios, TailwindCSS (for building the UI)  

---

## 📁 Project Structure

- **model-training/**  
  Contains Jupyter notebooks for data exploration, preprocessing, and model training.

- **power-bi/**  
  Contains Power BI reports and dashboards for visualizing key dataset insights and model performance.

- **models/**  
  Contains the saved trained model and scaler files.  

- **data/**  
  Contains the original breast cancer dataset CSV file.  

- **backend/**  
  Contains the Flask API code for serving model predictions.  

- **frontend/**  
  ReactJS application that interacts with the backend API using Axios and styled with TailwindCSS.  

- **README.md**  
  Project documentation.  

---

## 📊 1. Data Exploration & Visualization

- Analysis of feature distributions and class imbalance (benign vs malignant)  
- Correlation heatmaps to understand relationships between features  
- Visualizing counts of benign and malignant cases  
- Checking for missing values and data quality  
- Histograms and bar plots of important features  
- **Power BI dashboards for high-level insights and data storytelling**  

---

## 🧑‍🏫 2. Data Preprocessing

- Handling missing or irrelevant data (if any)  
- Dropping target variable from input features  
- Scaling features using MinMaxScaler for normalization  
- Splitting data into training and test sets  

---

## 🤖 3. Model Training (TensorFlow)

- Sequential neural network model with:  
  - Input layer receiving scaled features  
  - Two hidden layers with ReLU activation and dropout for regularization  
  - Output layer with sigmoid activation for binary classification (benign or malignant)  
- Model compiled with binary cross-entropy loss and Adam optimizer  
- Training with early stopping to prevent overfitting  
- Validation performed on test data  

---

## 🧪 4. Model Evaluation

- Classification report including precision, recall, F1-score  
- Confusion matrix visualization to analyze true and false positives/negatives  
- Plotting model loss curves to check training progress  
- **Power BI report for tracking evaluation metrics and model performance over time**  

---

## 🌐 5. Flask Backend

- Loads the trained model and scaler on startup  
- Provides REST API endpoint `/predict` for predictions  
- Accepts JSON input of diagnostic features, scales data, runs prediction  
- Returns predicted class (benign=0, malignant=1) and optionally prediction probability  

---

## 💻 6. React Frontend

- Form interface for users to input diagnostic features  
- Axios used to send data to Flask backend and receive prediction  
- Displays prediction result clearly to users  
- Responsive design styled using TailwindCSS for clean and modern look  

---

## 📈 7. Power BI Dashboard

The **Power BI** dashboard provides:

- Interactive charts showing benign vs malignant cases  
- Feature importance insights based on correlation and model coefficients  
- Confusion matrix and classification performance visuals  
- Drill-down capabilities for different feature groupings  

📁 Files located in the `power-bi/` folder can be opened with Power BI Desktop.

---

## 🚀 Getting Started

- Clone the repository  
- Download the breast cancer diagnostic dataset  
- Run the model training notebook to train and save the model and scaler  
- Start the Flask backend server to serve the prediction API  
- Launch the React frontend application  
- Open Power BI Desktop to explore the `.pbix` report  
- Access the app in your browser (e.g., http://localhost:3000)  

---

## 🛠 Technologies Used

| Layer       | Tools                              |
|-------------|------------------------------------|
| Data/EDA    | pandas, seaborn, matplotlib        |
| Visualization | Power BI                    |
| Modeling    | TensorFlow/Keras, scikit-learn     |
| Backend/API | Flask, joblib, numpy               |
| Frontend    | ReactJS, Axios, TailwindCSS        |

---

## 🧪 Sample Prediction

Given diagnostic input features such as mean radius, texture, perimeter, area, smoothness, concavity, symmetry, and fractal dimension:

- The model predicts the tumor class:  
  - 0 = Benign  
  - 1 = Malignant  

- The API returns the predicted class along with the confidence of the prediction.

---

**Happy coding and best of luck with your impactful breast cancer diagnostics project!** 🚀
