from flask import Flask
from flask import request
from flask_cors import CORS, cross_origin
import datetime
from classes import *
  
x = datetime.datetime.now()

def populate() -> Registry:
  reg = Registry('./registry.txt')
  #add details json to iterate over for admins
  admin=Admin('testemail@email.com','password',reg)
  reg.addAdmin(admin)
  admin.addEmployee('lmemail@email.com','line','manager','password',"Line Manager",{'location':'testloc','age':21,'gender':'non-binary','breakfast':'cereal first'})
  admin.addEmployee('empemail@email.com','internal','staff','password,',"Internal Staff",{'location':'Ohio','age':'unknown','gender':'yes','breakfast':'no'})
  lm = reg.getEmployee(0)
  lm.addEmployee(reg.getEmployee(1))
  return reg

reg = populate()
app = Flask(__name__)
CORS(app)

#calls made:
"""
get info:
  if manager: get personal info and employees
  and if employee, get personal info and claims

get pending claims:
  as line manager, get all pending claims from employees
  as employee, get own pending claims

get claims:
  get own claims, pending or past

"""

#login, checks for employee and returns id if found, -1 if not found
@app.route('/login',methods=["POST","GET"])
def login():
    id = -1
    if request.method=="POST":
        id = reg.tryLoginEmp(request.email,request.password)
        return id
    
@app.route('/claimdetails',methods=["POST","GET"])
def getClaimDetails():
    if request.method=="POST":
        #change to return JSON
        return reg.getExpenseClaim(request.claimid)
    
@app.route('/employeeslist',methods=["POST","GET"])
def getEmployees():
    if request.method=="POST":
        lm = reg.getEmployee(request.managerid)
        lm=LineManager()
        if lm.role=="Line Manager":
            #change to return json
            return lm.getMyEmployees()
        else:
            print("BackendError: employee is not line manager")
            return

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