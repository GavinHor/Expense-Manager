from flask import Flask, request, redirect, jsonify
from tinydb import TinyDB, Query
from datetime import datetime
import os, os.path

app = Flask(__name__)
db = TinyDB('./db.json') # make db if it doesn't exist
claims = db.table('claims') # make table if it doesn't exist

print(claims.all())

# debug code
# all_claims = db.all()
# print(all_claims)

# a = os.open("./db.json", os.O_RDONLY)
# print(os.read(a, 30))

@app.route('/submitClaim', methods=['POST'])
def submitClaim():
    claims.truncate() # delete all records

    claimType = request.form.get('type')
    claimId = "TC013AB" # Placeholder
    amount = request.form.get('amount')
    submissionDate = datetime.now()
    expenseDate = request.form.get('date')

    employee = "Asia Belfiore" # Placeholder
    status = "Pending"
    currency = request.form.get('currency')
    motive = request.form.get('motive')
    extra = request.form.get('extra')
    proofImage = request.form.get('proofImage')
    vat = request.form.get('vat')
    
    expenseClaim = {'type': claimType, 'id': claimId, 'amount': amount, 'submissionDate': submissionDate.strftime('%d/%m/%Y'), 'expenseDate': expenseDate, 'employee': employee, 'status': status, 'currency': currency, 'motive': motive, 'extra': extra, 'proofImage': proofImage, 'vat': vat}
    claims.insert(expenseClaim)
    print("Inserted " + expenseClaim.__str__())
    return redirect("http://localhost:3000/expenseClaimInfo")

@app.route('/loadClaim', methods=['GET'])
def loadClaim():
    # Retrieve claim data from database
    Claim = Query()
    claimsList = db.search(Claim.id == "TC013AB")

    # print(claimsList)

    response = jsonify(claims.all())
    response.headers.add('Access-Control-Allow-Origin', '*') # VERY IMPORTANT!!!

    return response

@app.route('/test', methods=['GET'])
def test():
    response = jsonify("Hello")
    response.headers.add('Access-Control-Allow-Origin', '*')

    return response

if __name__ == '__main__':
    app.run(debug=True)