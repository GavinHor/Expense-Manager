import React from 'react';
import { useState} from 'react';
import { useNavigate , Link } from 'react-router-dom';

import '../pagesStyles/processClaim.css';
import claimPf from "../images/IMG_2397.jpg"


import SideBar from '../components/SideBar';
import Nav from '../components/Nav';

export default function ProcessClaim(){
    const name="Asia Belfiore"
    const initials="AB"
    const email="a.belfiore@FDM.uk"

    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
      setSideBarOpen(!sidebarOpen);
    }
  
    const navigate = useNavigate();
    function handleClick(event) {
      navigate('/target-route');
    }
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
                  <table>
                    <tr>
                      <td>Type:</td>
                      <td className="description" >Travel Claim</td>
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
                       <td className='viewAll'><Link to="/expenseClaimInfo?id=1"> <button onClick={handleClick} className="button">View All</button> </Link></td>
                    </tr>
                  </table>
                </div>
                <div className='employeeInfo'>
                  <h1>Employee Details:</h1>
                  <table>
                    <tr>
                      <td>Name:</td>
                      <td className="description" >{name}</td>
                    </tr>
                    <tr>
                      <td>Email:</td>
                      <td className="description">{email}</td>
                    </tr>
                    <tr>
                      <td>Role:</td>
                      <td className="description">Consultant</td>
                    </tr>
                    <tr>
                      <td>Reliability Score:</td>
                      <td className="description">81%</td>
                    </tr>
                  </table>
                </div>
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
            <nav className="nav">
              <Link to="/home"><button onClick={handleClick}> APPROVE </button></Link>
              <Link to="/home"><button onClick={handleClick}> REPORT </button></Link>
            </nav>
        </div>
    )
}