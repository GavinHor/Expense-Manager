import * as React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Claims from './pages/Claims';
import MyEmp from './pages/MyEmployees';
import Login from './pages/Login';
import InitialPage from './pages/InitialPage'
import EmployeeHomePage from './pages/EmployeeHomePage';
import PersonalInfo from './pages/PersonalInfo';
import ProcessClaim from './pages/ProcessClaim';
import PurchaseExpense from './pages/PurchaseExpense';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<InitialPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/home" element={<HomePage />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/myEmployees" element={<MyEmp />} />
        <Route path="/myDetails" element={<PersonalInfo />} />
        <Route path="/ProcessClaim" element={<ProcessClaim />} />
        <Route path="/expenseClaimInfo" element={<PurchaseExpense />} />

        <Route path="/EmployeeHome" element={<EmployeeHomePage />} />
      </Routes>
    </div>
  );
}
