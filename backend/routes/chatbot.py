from flask import Blueprint, request, jsonify
from services.chatbot import chat_with_bot

chatbot_bp = Blueprint("chatbot", __name__)

@chatbot_bp.route("/chatbot", methods=["POST"])
def chatbot():
    data = request.get_json()
    message = data.get("message")

    if not message:
        return jsonify({"error": "Message is required"}), 400

    reply = chat_with_bot(message)

    return jsonify({"reply": reply})
