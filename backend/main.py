from flask import Flask, send_file
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)  # Initialize Flask app
CORS(app)  # Apply CORS after app initialization

@app.route('/check-attendance')
def download_attendance():
    # Example data (replace with your actual data)
    data = {'Name': ['John Doe', 'Jane Doe'], 'Attendance': ['Present', 'Absent']}
    df = pd.DataFrame(data)

    # Save as Excel file
    file_path = "attendance.xlsx"
    df.to_excel(file_path, index=False)

    # Send file as response
    return send_file(file_path, as_attachment=True)

if __name__ == '__main__':
    app.run(debug=True)
