import React from 'react';
import { useState} from 'react';
import { useLocation , Link } from 'react-router-dom';

import '../pagesStyles/processClaim.css';
import claimProof from "../images/IMG_2397.jpg"

import SideBar from '../components/SideBar';
import Nav from '../components/Nav';

import { userDetails } from '../data/userDetails';
import { claims } from '../data/claims';
import {employees}  from '../data/employees'; 

export default function ProcessClaim(){
    const name=userDetails.map(user=> user.name);
    const initials=userDetails.map(user=> user.initials);
    const email=userDetails.map(user=> user.email);

    const { state } = useLocation();
    const claimID = state.claimId;
    const data = state.id;

    const claimEmp=claims.filter(claim=> claim.id==claimID).map(claim=>claim.employee);

    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
      setSideBarOpen(!sidebarOpen);
    }

    const claimDets = claims.filter(claim => claim.id==claimID).map(claim =>
                  <table className='claimDetails'>
                    <tr>
                      <td>Type:</td>
                      <td className="description" >{claim.type}</td>
                    </tr>
                    <tr>
                      <td>Id:</td>
                      <td className="description">{claim.id}</td>
                    </tr>
                    <tr>
                      <td>Amount:</td>
                      <td className="description">{claim.amount}</td>
                    </tr>
                    <tr>
                      <td>Submission:</td>
                      <td className="description">{claim.submission}</td>
                    </tr>
                    <tr>
                      <td>Status:</td>
                      <td className="description">{claim.status}</td>
                    </tr>
                    <tr>
                       <td className='viewAll'><Link to={{pathname:"/expenseClaimInfo"}}> <button className="button">View All</button> </Link></td>
                    </tr>
                  </table>);

    const claimPf = claims.filter(claim => claim.id==claimID).map(claim =>
      <div className='expProof'>
                      <img src={claimProof}/>
                      <table>
                        <tr className='vat'>
                          <td>VAT:</td>
                          <td className="description" >{claim.VAT}</td>
                        </tr>
                      </table>
                    </div>);

    const empDets = employees.filter(employee => employee.name==claimEmp).map(employee =>
      <table>
        <tr>
        <td>Name:</td>
          <td className="description" >{employee.name}</td>
        </tr>
        <tr>
        <td>Email:</td>
          <td className="description">{employee.email}</td>
        </tr>
        <tr>
        <td>Role:</td>
          <td className="description">{employee.role}</td>
        </tr>
        <tr>
        <td>Reliability Score:</td>
          <td className="description">{employee.score}</td>
        </tr>
      </table>);
  
    return(
        <div className="ProcessClaim">
            <span>
                <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
            </span>
            <Nav onClick={handleViewSidebar} name={name} initials={ initials} email={email}/>
            <div className='middle'>
              <div className='left'>
                <div className='claimInfo'>
                  <h1>Expense Details:</h1>
                  {claimDets}
                </div>
                <div className='employeeInfo'>
                  <h1>Employee Details:</h1>
                  {empDets}
                </div>
              </div>
              <div className='right'>
                <h1>Expense Proof:</h1>
                {claimPf}
              </div>
            </div>
            <nav className="nav">
              <Link to={{pathname:'/home' , state: '1' }}><button> APPROVE </button></Link>
              <Link to={{pathname:"/ReportClaim"}}><button> REPORT </button></Link>
            </nav>
        </div>
    )
}