from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()   # 👈 THIS LINE IS CRITICAL

from routes.eligibility import eligibility_bp
from routes.prediction import prediction_bp
from routes.chatbot import chatbot_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(eligibility_bp, url_prefix="/api")
app.register_blueprint(prediction_bp, url_prefix="/api")
app.register_blueprint(chatbot_bp, url_prefix="/api")

if __name__ == "__main__":
    app.run(debug=True)
