import datetime
import sqlite3

#incomplete classes:
#Registry, Admin, Employee subclasses

#todo(that i remember)
#check error handling on functions, especially remove functions and add functions
#finish other functions
#go over the whole thing and make sure it makes sense and isn't messed up somewhere i missed

class Registry:
    def __init__(self, db):
        #either keep conn open or open and close with each call
        self.dburl=db
        #self.conn=sqlite3.connect(db)
        #change to use query retireve
        self.FEmail=None
        self.HREmail=None
        self.claims=[]
        self.employees=[]
        self.managers={}
        self.admins=[]
        self.reports=[]
    
    def getRegistry(self):
        return self
    
    def newID(self,type):
        types=["Claims","Employees","Admins","Managers", "Reports"]
        if type==types[0]:
            return len(self.claims)
        elif type==types[1]:
            return len(self.employees)
        elif type==types[2]:
            return len(self.admins)
        elif type==types[3]:
            return len(self.managers)
        elif type==types[4]:
            return len(self.reports)

    def getAdmin(self, id):
        conn=sqlite3.connect(self.dburl)
        db=conn.cursor()
        db.execute("select * from Admin where id="+id)
        conn.close()

    def getEmployee(self, id):
        conn=sqlite3.connect(self.dburl)
        db=conn.cursor()
        db.execute("select * from Employee where id="+id)
        conn.close()

    def getExpenseClaim(self, id):
        conn=sqlite3.connect(self.dburl)
        db=conn.cursor()
        db.execute("select * from 'Expense Claims' where id="+id)
        conn.close()

    def getReport(self, id):
        conn=sqlite3.connect(self.dburl)
        db=conn.cursor()
        db.execute("select * from Reports where id="+id)
        conn.close()

    def addClaim(self,claim):
        self.claims.append(claim)

    def addEmployee(self, emp):
        self.employees.append(emp)

    def addLineManager(self,manager):
        self.managers[manager.id]=manager

    def addAdmin(self, admin):
        self.admins.append(admin)

    def addReport(self,report):
        self.reports.append(report)

    def removeEmployee(self,emp):
        try:
            self.employees.remove(emp)
        except:
            pass #add error handling

    def notifyReliabilityLow(self):
        pass
    
    def notifyClaimProcessed(self):
        pass
    
    def notifyHR(self):
        pass
    
    def notifyFinanceForReimbursment(self):
        pass
    
    def sendFinanceExpenditureSheet(self):
        pass
    
    def generateExpenditureSheet(self):
        pass
    
    def generateExpenseID(self):
        pass
    
    def generateProofID(self):
        pass

 #incomplete   
class Admin:
    def __init__(self, email, password, reg) -> None:
        self.email=email
        self.password=password
        self.registry=reg

    def login(self, email, password):
        if (email==self.email and password==self.password):
            return True
        else:
            return False

    #these two functions require modifying registry, if direct modification isn't considered safe
    #then add functions to registry, with or without required admin verification
    def addEmployee(self,email,fname,lname,pw, role):
        if role=="Internal Staff":
            emp = InternalStaff()
        elif role=="Consultant":
            emp = Consultant()
        elif role=="Line Manager":
            emp = LineManager()
        else:
            pass #add error

    def removeEmployee(self,emp):
        emp.getManager().removeEmployee(emp)
        self.registry.removeEmployee(emp)

class Employee:
    def __init__(self, email, password, role, manager, reg, personaldetails) -> None:
        self.name=personaldetails['fname']+personaldetails['lname']
        self.email=email
        self.password=password
        self.role=role
        self.claimsList=[]
        self.reliabilityScore=0
        self.allowance=0
        self.maxallowance=0
        self.manager=manager
        self.reg=reg
        self.personalDetails=personaldetails

    def getClaimList(self):
        return self.claimsList
    
    def login(self, email, pw):
        if (self.email==email and self.checkPasswordValid(pw)):
            return True
        else:
            return False
    
    def makeExpenseClaim(self, proof, expdate, amount, currency, extraDetails):
        
        id=self.reg.newID("Claims")
        
        if extraDetails[0]=="Overnight":
            claim=OvernightStayExpense(id, self, amount, currency, proof, self.manager, expdate, extraDetails[1], extraDetails[2], extraDetails[3])
        elif extraDetails[0]=="Meal":
            claim=MealExpense(id, self, amount, currency, proof, self.manager, expdate, extraDetails[1], extraDetails[2], extraDetails[3])
        elif extraDetails[0]=="Purchase":
            claim=PurchaseExpense(id, self, amount, currency, proof, self.manager, expdate, extraDetails[1], extraDetails[2], extraDetails[3], extraDetails[4])
        elif extraDetails[0]=="Travel":
            claim=TravelExpense(id, self, amount, currency, proof, self.manager, expdate, extraDetails[1], extraDetails[2])

        self.reg.addClaim(claim)
        self.manager.addPendingClaim(claim)
        self.addSubmittedClaim(claim)

    def updatePassword(self, newpw):
        self.password=newpw
    
    def changeAllowance(self, val):
        self.maxallowance=val
        self.allowance=val
    
    def getScore(self):
        return self.reliabilityScore
    
    def updateScore(self, val):
        self.reliabilityScore=val
    
    def updateAllowance(self, val):
        #this or add val to allowance
        self.allowance=val
        #self.allowance+=val
    
    def filterClaimsbyDate(self, start, end):
        filtered=[]
        for claim in self.claimsList:
            if claim.submitdate > start and claim.submitdate < end:
                filtered.append(claim)
        return filtered
    
    def filterClaimsByStatus(self, status):
        filtered=[]
        for claim in self.claimsList:
            if claim.status == status:
                filtered.append(claim)
        return filtered

    
    def addSubmittedClaim(self, claim):
        self.claimsList.append(claim)
    
    def getPersonalDetails(self):
        return self.personalDetails
    
    def getManager(self):
        return self.manager
    
    def checkPasswordValid(self, pw):
        if pw==self.password:
            return True
        else:
            return False
    

class LineManager(Employee):
    def __init__(self, email, password, role, manager, reg, personaldetails, elist) -> None:
        super().__init__(email, password, role, manager, reg, personaldetails)
        self.employeeList=elist
        self.pendingClaims=[]

    def getEmployeeClaims(self):
        return self.pendingClaims
    
    def getMyEmployees(self):
        return self.employeeList
    
    def approveClaim(self, claim):
        pass

    def reportClaim(self, claim, reason):
        pass
    
    def changeAllowance(self, emp, val):
        emp.changeAllowance(val)
    
    def filterEmployeeClaim(self, status):
        filtered=[]
        for claim in self.pendingClaims:
            if claim.status==status:
                filtered.append(claim)
        return filtered
    
    def addPendingClaim(self, claim):
        self.pendingClaims.append(claim)

    def removeClaimFromPendingList(self,claim):
        self.pendingClaims.remove(claim)

    def removeEmployee(self,emp):
        self.employeeList.remove(emp)

class InternalStaff(Employee):
    def __init__(self, email, password, role, manager, reg, personaldetails) -> None:
        super().__init__(email, password, role, manager, reg, personaldetails)

class Consultant(Employee):
    def __init__(self, email, password, role, manager, reg, personaldetails, location, currency) -> None:
        super().__init__(email, password, role, manager, reg, personaldetails)
        self.location=location
        self.currency=currency

    def changeLocation(self,nloc):
        self.location=nloc

    def changeCurrency(self,ncur):
        self.currency=ncur

    def getPersonalDetails(self):
        return [*self.personalDetails,self.location]

class Report:
    def __init__(self, claim, reason, details) -> None:
        self.claim=claim
        self.reason=reason
        self.details=details

    def getDetails(self):
        return self.details
    
    def getReason(self):
        return self.reason

class ExpenseClaim:
    def __init__(self, id, employee, amount, currency, proof, manager, expdate) -> None:
        self.statuses=["Pending","Approved","Reported"]
        self.id=id
        self.employee=employee
        self.submitdate=datetime.date.today()
        self.status=self.statuses[0]
        self.amount=amount
        self.currency=currency
        self.proof=proof
        self.expensedate=expdate
        self.manager=manager

    def addExpenseProof(self,proof):
        self.proof=proof
        return

    def changeStatus(self, status):
        self.status=status
        return

    def getExpenseProof(self):
        return self.proof
    
    def getLineManager(self):
        return self.manager
    
    def getClaimDetails():
        return None
class ExpenseProof:
    def __init__(self,id,image,vat) -> None:
        self.id=id
        self.image=image
        self.vat=vat
    
    def getProofID(self):
        return self.id
    
    def getProofFile(self):
        return self.image
    
    def getVAT(self):
        return self.vat

class OvernightStayExpense(ExpenseClaim):
    def __init__(self, id, employee, amount, currency, proof, manager, expdate, stype, sname, checkoutdate) -> None:
        super().__init__(id, employee, amount, currency, proof, manager, expdate)
        self.stype=stype
        self.sname=sname
        self.checkoutdate=checkoutdate

    def getClaimDetails(self):
        return [self.stype,self.sname,self.checkoutdate]

class MealExpense(ExpenseClaim):
    def __init__(self, id, employee, amount, currency, proof, manager, expdate, mtype, location, stype) -> None:
        super().__init__(id, employee, amount, currency, proof, manager, expdate)
        self.mtype=mtype
        self.location=location
        self.stype=stype

    def getClaimDetails(self):
        return [self.mtype,self.location,self.stype]

class PurchaseExpense(ExpenseClaim):
    def __init__(self, id, employee, amount, currency, proof, manager, expdate, ptype, itemno, items, store) -> None:
        super().__init__(id, employee, amount, currency, proof, manager, expdate)
        self.ptype=ptype
        self.itemno=itemno
        self.items=items
        self.store=store

    def getClaimDetails(self):
        return[self.ptype,self.itemno,self.items,self.store]

class TravelExpense(ExpenseClaim):
    def __init__(self, id, employee, amount, currency, proof, manager, expdate, transtype, motive) -> None:
        super().__init__(id, employee, amount, currency, proof, manager, expdate)
        self.transtype=transtype
        self.motive=motive

    def getClaimDetails(self):
        return[self.transtype,self.motive]
