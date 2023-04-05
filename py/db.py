import sqlite3

conn=sqlite3.connect('fdm.db ')
conn.close()


#will add temp function to initialise tables
#add functions to run premade queries depending on design outline

#database format
#choose if id is string or auto int
"""
table for Admin
	-id: auto int
	-email: string
    -password: string
    
table for Employee
	-id: auto int/string
	-claims list: blob (list <expense claim IDs>, needs to be retrieved from database)
    -name: string
    -email: string
    -password: string
    -allowance: float
    -reliability score: float
    -role in company:string
    -location: string
    -currency: string
    (internal staff and line managers will use default location and currency and cannot alter it)

table for Line Manager
	-id: int/string (matches employee ID)
    -employee list: blob (list <employee IDs>, needs to be retrieved from database)
    -employee claims: blob (list <expense claim IDs>, needs to be retrieved from database)
    
    
table for Reports
	-id: auto int/string
	-reason: string/enum
    -details: string
    -claimID: int/string
    -employeeID: int/string

(separate tables for difference expense claim types, since expense claim is abstract class and methods for retrieval overridden by types)
    
table for Overnight Stay Expense
	-id: auto int/string
    -employeeID: int/string
    -submissionDate: date
    -status: string/enum
    -amount: float
    -currency: String
    -ProofID: int/string
    -expenseDate: date
    -managerID: int/string
    -structureType: string
    -structureName: string
    -checkOutDate: date

table for Meal Expense
	-id: auto int/string
    -employeeID: int/string
    -submissionDate: date
    -status: string/enum
    -amount: float
    -currency: String
    -ProofID: int/string
    -expenseDate: date
    -managerID: int/string
    -mealType: string
    -diningLocation: string
    -structureType: string
    
table for Purchase Expense
	-id: auto int/string
    -employeeID: int/string
    -submissionDate: date
    -status: string/enum
    -amount: float
    -currency: String
    -ProofID: int/string
    -expenseDate: date
    -managerID: int/string
    -purchaseType: string
    -numberOfItems: int
    -items: blob (list String)
    -storeOfPurchase: string
    
table for Travel Expense
	-id: auto int/string
    -employeeID: int/string
    -submissionDate: date
    -status: string/enum
    -amount: float
    -currency: String
    -ProofID: int/string
    -expenseDate: date
    -managerID: int/string
    -transportationType: string
    -motive: string
    
table for Expense Proofs
	-id: auto int/string
    -image: blob
    -VAT: float
"""