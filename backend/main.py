from flask import Flask, jsonify, Response
from flask_cors import CORS
import cv2

app = Flask(__name__)
CORS(app)  # Allow frontend to communicate with backend

# Open the camera
cap = cv2.VideoCapture(0)

@app.route("/")
def home():
    return jsonify({"message": "Backend is running!"})  # Fix for 404 error

@app.route("/register-biometric", methods=["POST"])
def register_biometric():
    return jsonify({"message": "Biometric registered successfully!"})

@app.route("/check-attendance", methods=["GET"])
def check_attendance():
    return jsonify({"message": "Attendance checked successfully!"})

@app.route("/capture-image", methods=["GET"])
def capture_image():
    if not cap.isOpened():
        return jsonify({"error": "Camera not available"}), 500

    ret, frame = cap.read()
    if not ret:
        return jsonify({"error": "Failed to capture image"}), 500

    _, buffer = cv2.imencode('.jpg', frame)
    return Response(buffer.tobytes(), mimetype='image/jpeg')

@app.route("/shutdown", methods=["POST"])
def shutdown():
    cap.release()
    cv2.destroyAllWindows()
    return jsonify({"message": "Camera released successfully!"})

if __name__ == "__main__":
    try:
        app.run(debug=True, port=5000)  # Ensure port is set to 5000
    except KeyboardInterrupt:
        cap.release()
        cv2.destroyAllWindows()
        print("Camera resources released.")
