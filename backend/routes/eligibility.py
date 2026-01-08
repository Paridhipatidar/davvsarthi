from flask import Blueprint, request, jsonify
from services.eligibility import check_eligibility

eligibility_bp = Blueprint("eligibility", __name__)

@eligibility_bp.route("/eligibility", methods=["POST"])
def eligibility():
    data = request.get_json()

    marks = data.get("marks")
    category = data.get("category")
    course = data.get("course")

    if marks is None or not category or not course:
        return jsonify({"error": "Missing fields"}), 400

    result = check_eligibility(marks, category, course)
    return jsonify(result)
