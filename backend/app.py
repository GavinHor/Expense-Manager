from flask import Flask, render_template, request, redirect
from tinydb import TinyDB, Query

app = Flask(__name__)
db = TinyDB('db.json')
claims = db.table('claims')
claims.truncate()

@app.route('/submitClaim', methods=['POST'])
def submitClaim():
    claimType = request.form.get('type')
    amount = request.form.get('amount')
    date = request.form.get('date')
    currency = request.form.get('currency')
    motive = request.form.get('motive')
    extra = request.form.get('extra')
    proofImage = request.form.get('proofImage')
    vat = request.form.get('vat')
    
    expenseClaim = {'type': claimType, 'amount': amount, 'date': date, 'currency': currency, 'motive': motive, 'extra': extra, 'proofImage': proofImage, 'vat': vat}
    claims.insert(expenseClaim)
    return redirect("http://localhost:3000/expenseClaimInfo")

if __name__ == '__main__':
    app.run(debug=True)