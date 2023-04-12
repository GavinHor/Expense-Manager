import React from 'react';
import { useState} from 'react';
import { useNavigate, useLocation } from "react-router-dom";

import '../pagesStyles/expenseStyles.css';
import claimPf from "../images/IMG_2397.jpg"
import logo from '../images/indietro.png'

import SideBar from '../components/SideBar';
import Nav from '../components/Nav';

import { userDetails } from '../data/userDetails';
import { claims } from '../data/claims';

export default function PurchaseExpense(){
    const { state } = useLocation();
    const claimID = state.claimID;
    const data = state.id;

    const name=userDetails.filter(user=> user.id==data).map(user=> user.name);
    const initials=userDetails.filter(user=> user.id==data).map(user=> user.initials);
    const email=userDetails.filter(user=> user.id==data).map(user=> user.email);

    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
      setSideBarOpen(!sidebarOpen);}

    const navigate = useNavigate();
    function handleClick(event) {
        event.preventDefault(); 
        navigate(-1);
      }
    
    return(
        <div className="PurchaseExpense">
             <span>
                <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
            </span>
            <Nav onClick={handleViewSidebar} name={name} initials={ initials} email={email}/>
            <div className='middle'>
              <div className='left'>
                <h1>Claim Details:</h1>
                <table>
                  <tr>
                    <td>Type:</td>
                    <td className="description" > {claims.filter(claim=> claim.id==claimID).map(claim=> claim.type)}</td>
                  </tr>
                  <tr>
                    <td>Id:</td>
                    <td className="description">{claims.filter(claim=> claim.id==claimID).map(claim=> claim.id)}</td>
                  </tr>
                  <tr>
                    <td>Amount:</td>
                    <td className="description">{claims.filter(claim=> claim.id==claimID).map(claim=> claim.amount)}</td>
                  </tr>
                  <tr>
                    <td>Submission:</td>
                    <td className="description">{claims.filter(claim=> claim.id==claimID).map(claim=> claim.submission)}</td>
                  </tr>
                  <tr>
                    <td>Expense Date:</td>
                    <td className="description">{claims.filter(claim=> claim.id==claimID).map(claim=> claim.expDate)}</td>
                  </tr>
                  <tr>
                    <td>Employee:</td>
                    <td className="description" >{claims.filter(claim=> claim.id==claimID).map(claim=> claim.employee)}</td>
                  </tr>
                  <tr>
                    <td>Status:</td>
                    <td className="description">{claims.filter(claim=> claim.id==claimID).map(claim=> claim.status)}</td>
                  </tr>
                  <tr>
                    <td>Currency:</td>
                    <td className="description">{userDetails.map(user=> user.currency)}</td>
                  </tr>
                  <tr>
                    <td>Motive:</td>
                    <td className="description">{claims.filter(claim=> claim.id==claimID).map(claim=> claim.id)}</td>
                  </tr>
                  <tr>
                    <td>Extra Details:</td>
                    <td className="description">N/A</td>
                  </tr>
                </table>
                <button className="indietro" onClick={handleClick}> <img style={{width:'30px'}} src={logo} alt="indietro"/> </button>
              </div>
              <div className='right'>
                <h1>Expense Proof:</h1>
                <div className='exProof'>
                  <img src={claimPf}/>
                  <table>
                    <tr className='vat'>
                      <td>VAT:</td>
                      <td className="description" >{claims.map(claim=> claim.VAT)}</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
        </div>
    )
}