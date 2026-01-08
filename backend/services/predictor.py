import pandas as pd
import os
from utils.probability import calculate_probability

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(BASE_DIR, "data", "admission_data.csv")

def predict_admission(year, course, category, rank):
    df = pd.read_csv(DATA_PATH)

    record = df[
        (df["year"] == year) &
        (df["course"] == course) &
        (df["category"] == category)
    ]

    if record.empty:
        return {
            "success": False,
            "message": "No historical data found for this selection"
        }

    last_rank = int(record.iloc[0]["last_rank"])
    probability = calculate_probability(rank, last_rank)

    return {
        "success": True,
        "last_admitted_rank": last_rank,
        "your_rank": rank,
        "probability": probability,
        "chance": (
            "High" if probability >= 70
            else "Medium" if probability >= 40
            else "Low"
        )
    }
