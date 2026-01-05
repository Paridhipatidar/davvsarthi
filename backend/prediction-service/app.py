from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)  # VERY IMPORTANT for frontend connection

# Load dataset
DATA_PATH = "data/admission_data.csv"
df = pd.read_csv(DATA_PATH)

@app.route("/api/predict-admission", methods=["POST"])
def predict_admission():
    data = request.json

    year = data.get("year")
    rank = data.get("rank")
    course = data.get("course")
    category = data.get("category")

    # Filter dataset
    filtered = df[
        (df["year"] == year) &
        (df["course"] == course) &
        (df["category"] == category)
    ]

    if filtered.empty:
        return jsonify({
            "probability": 0,
            "chance": "Low",
            "admission_possible": False
        })

    last_rank = filtered["last_rank"].max()

    # Probability logic
    if rank <= last_rank:
        probability = 85
    elif rank <= last_rank * 1.2:
        probability = 60
    elif rank <= last_rank * 1.5:
        probability = 35
    else:
        probability = 10

    chance = (
        "High" if probability >= 70 else
        "Medium" if probability >= 40 else
        "Low"
    )

    return jsonify({
        "probability": probability,
        "chance": chance,
        "admission_possible": probability >= 40
    })


if __name__ == "__main__":
    app.run(port=5000, debug=True)
