import React from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

import '../pagesStyles/PagesStyles.css';

import SideBar from '../components/SideBar';
import Nav from '../components/Nav';
import ClaimBtn from '../components/ClaimBtn';
import { Link } from 'react-router-dom';

function EmployeeHomePage() {
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

    return (
    <div className="EmployeeHomePage">
      <span>
      <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      </span>
      <Nav onClick={handleViewSidebar} initials={initials} name={name} email={email}/>
      <div className='bottom'>
          <div className='left'>
            <h5></h5>
              <table className='table'>
                <tr><td id="allowanceTitle">My Allowance:</td></tr>
                <tr><td id="allowanceNum">£ 627.44</td></tr>
                <tr><td id="allowanceCap">/ £ 800</td></tr>
              </table>
            <div class="claims">
                <table>
                    <legend id="EmployeePageHeading">Pending Claims:</legend>
                  <tr><td className="EmployeeHpExpense"><ClaimBtn name="Travel Claim" amount="£ 51.99" date="01/01/2023"/></td></tr>
                  <tr><td><ClaimBtn name="Meal Claim" amount="£ 21.99" date="20/03/2023"/></td></tr>
                  <tr><td><ClaimBtn name="Travel Claim" amount="£ 51.99" date="01/01/2023"/></td></tr>
                  <tr><td><ClaimBtn name="Meal Claim" amount="£ 21.99" date="20/03/2023"/></td></tr>
                  <tr><td><ClaimBtn name="Travel Claim" amount="£ 51.99" date="01/01/2023"/></td></tr>
                  <tr><td><ClaimBtn name="Meal Claim" amount="£ 21.99" date="20/03/2023"/></td></tr>
                </table>
            </div>
          </div>
          <nav class="actions">
            <Link to="/claims"> <button onClick={handleClick}>Claim Expense</button> </Link>
            <Link to="/claims"> <button onClick={handleClick}>My Claims </button> </Link>
            <Link to="/claims"> <button onClick={handleClick}>My Information </button> </Link>
          </nav>
      </div>
    </div>
  );
}

export default EmployeeHomePage;