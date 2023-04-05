import sqlite3

class Registry:
    def __init__(self, db):
        #either keep conn open or open and close with each call
        self.dburl=db
        #self.conn=sqlite3.connect(db)
        #change to use query retireve
        self.FEmail=None
        self.HREmail=None
    
    def getRegistry(self):
        return self
    
    def notifyAllowanceExceeded(self):
        pass
    
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
    

    
