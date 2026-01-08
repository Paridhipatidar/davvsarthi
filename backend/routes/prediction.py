from flask import Blueprint, request, jsonify
from services.predictor import predict_admission

prediction_bp = Blueprint("prediction", __name__)

@prediction_bp.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    year = data.get("year")
    course = data.get("course")
    category = data.get("category")
    rank = data.get("rank")

    if None in (year, course, category, rank):
        return jsonify({"error": "Missing fields"}), 400

    result = predict_admission(
        int(year),
        course,
        category,
        int(rank)
    )

    return jsonify(result)
