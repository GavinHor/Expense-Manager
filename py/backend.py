from flask import Flask
from flask_cors import CORS, cross_origin
import datetime
  
x = datetime.datetime.now()
  
app = Flask(__name__)
CORS(app)

@app.route('/data')
def get_time():
      return {
        'Name':"geek", 
        "Age":"22",
        "Date":x, 
        "programming":"python"
        }
  
      
if __name__ == '__main__':
    app.run(debug=True)