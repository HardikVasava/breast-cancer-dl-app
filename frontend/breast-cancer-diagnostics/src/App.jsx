import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const defaultData = {
    "mean radius": 14.5,
    "mean texture": 19.2,
    "mean perimeter": 94.3,
    "mean area": 616.5,
    "mean smoothness": 0.090,
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
    "worst concavity": 0.310,
    "worst concave points": 0.265,
    "worst symmetry": 0.223,
    "worst fractal dimension": 0.092,
    "benign_0__mal_1": 0
  };

  const [formData, setFormData] = useState(defaultData);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-indigo-600 mb-6">Breast Cancer Prediction</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-8 rounded-lg shadow-lg space-y-6 overflow-y-auto max-h-[70vh] flex flex-col"
      >
        {Object.keys(formData).map((key) => (
          <div key={key} className="flex flex-col">
            <label className="mb-2 font-medium text-lg text-gray-700" htmlFor={key}>
              {key.replace(/_/g, " ")}
            </label>
            <input
              id={key}
              name={key}
              type={key === "benign_0__mal_1" ? "number" : "text"}
              step="any"
              value={formData[key]}
              onChange={handleChange}
              className="border-2 border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required={key !== "benign_0__mal_1"}
            />
          </div>
        ))}
        <div className="w-full flex justify-center mt-4">
          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-1/2 bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition duration-200"
          >
            {loading ? "Predicting..." : "Predict"}
          </button>
        </div>
      </form>

      {error && (
        <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg w-full max-w-4xl">
          Error: {error}
        </div>
      )}

      {result && (
        <div className="mt-6 p-6 bg-green-100 border border-green-400 text-green-700 rounded-lg w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Prediction Result</h2>
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
              <div className="mt-4">
                <p className="text-lg">
                  Probability Default:{" "}
                  {(result.probability_default * 100).toFixed(2)}%
                </p>
                <p className="text-lg">
                  Probability Repaid:{" "}
                  {(result.probability_repaid * 100).toFixed(2)}%
                </p>
              </div>
            )}
        </div>
      )}
    </div>
  );
}
