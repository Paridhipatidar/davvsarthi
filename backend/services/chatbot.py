import os
from google import genai

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

SYSTEM_PROMPT = """
You are an admission guidance assistant for a college.
You help students with:
- eligibility criteria
- admission chances
- rank vs probability
- course-related guidance

Be clear, concise, and factual.
Do not hallucinate data.
"""

def chat_with_bot(user_message):
    response = client.models.generate_content(
        model="models/gemini-2.5-flash-lite",   # ✅ THIS IS THE KEY FIX
        contents=f"{SYSTEM_PROMPT}\nStudent: {user_message}\nAssistant:"
    )
    return response.text
