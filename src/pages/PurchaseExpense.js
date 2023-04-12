import React from 'react';
import { useState , useEffect } from 'react';
import { useParams } from "react-router-dom";

import '../pagesStyles/expenseStyles.css';
import claimPf from "../images/IMG_2397.jpg"
import logo from '../images/indietro.png'

import SideBar from '../components/SideBar';
import Nav from '../components/Nav';

export default function PurchaseExpense(){
    const name="Asia Belfiore"
    const initials="AB"
    const email="a.belfiore@FDM.uk"
    const { claimId } = useParams();

    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
      setSideBarOpen(!sidebarOpen);
    }

    const [claim, setClaim] = useState([]);

    /*async function fetchClaim() {
      const response = await fetch("http:..localhost:5000/claimdetails")
      if (!response.ok) {
        throw new Error("Network response not OK");
      }
      const jsonData = await response.json();
      console.log(jsonData);
      return jsonData;
    }*/

    useEffect(() => {
        // Fetch claim data from the backend
        fetch('http://localhost:5000/claimdetails?claimid='+claimId, {
          method: "POST",
          mode: "cors"
        })
        .then(response => response.json())
        .then(data => setClaim(data));
    }, []);

    console.log(claimId);
    console.log(claim);

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
                    <td className="description" > Travel Claim</td>
                  </tr>
                  <tr>
                    <td>Id:</td>
                    <td className="description">TC013AB</td>
                  </tr>
                  <tr>
                    <td>Amount:</td>
                    <td className="description">£ 51.99</td>
                  </tr>
                  <tr>
                    <td>Submission:</td>
                    <td className="description">01/03/2023</td>
                  </tr>
                  <tr>
                    <td>Expense Date:</td>
                    <td className="description">16/01/2023</td>
                  </tr>
                  <tr>
                    <td>Employee:</td>
                    <td className="description" >{name}</td>
                  </tr>
                  <tr>
                    <td>Status:</td>
                    <td className="description">PENDING</td>
                  </tr>
                  <tr>
                    <td>Currency:</td>
                    <td className="description">£ - GBP</td>
                  </tr>
                  <tr>
                    <td>Motive:</td>
                    <td className="description">Business Conference</td>
                  </tr>
                  <tr>
                    <td>Extra Details:</td>
                    <td className="description">N/A</td>
                  </tr>
                </table>
                <button className="indietro" onClick={alert}> <img style={{width:'30px'}} src={logo} alt="indietro"/> </button>
              </div>
              <div className='right'>
                <h1>Expense Proof:</h1>
                <div className='exProof'>
                  <img src={claimPf}/>
                  <table>
                    <tr className='vat'>
                      <td>VAT:</td>
                      <td className="description" >£ 10.12</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
        </div>
    )
}