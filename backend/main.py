from flask import Flask, request, jsonify, send_file
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)  # Initialize Flask app
CORS(app)  # Enable CORS

# Store biometric data (for demo purpose)
biometric_data = []

@app.route("/register-biometric", methods=["POST"])
def register_biometric():
    try:
        # Get data from request (e.g., user ID or name)
        data = request.json
        user_name = data.get("name")

        if not user_name:
            return jsonify({"error": "Name is required"}), 400

        # Simulate biometric registration
        biometric_data.append({"Name": user_name, "Attendance": "Present"})
        return jsonify({"message": f"Biometric registered successfully for {user_name}"}), 200

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": "Error registering biometrics"}), 500


@app.route("/check-attendance", methods=["GET"])
def download_attendance():
    try:
        # Create DataFrame from stored data
        if not biometric_data:
            return jsonify({"error": "No attendance data found"}), 404

        df = pd.DataFrame(biometric_data)

        # Save as Excel file
        file_path = "attendance.xlsx"
        df.to_excel(file_path, index=False)

        # Send file as attachment
        return send_file(file_path, as_attachment=True)

    except Exception as e:
        print("Error:", str(e))
        return jsonify({"error": "Error generating attendance file"}), 500


if __name__ == "__main__":
    # Run on port 5000 for frontend connection
    app.run(host="0.0.0.0", port=5000, debug=True)
