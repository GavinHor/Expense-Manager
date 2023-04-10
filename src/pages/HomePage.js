import React from 'react';
import { useState} from 'react';
import { useNavigate , Link } from 'react-router-dom';

import '../pagesStyles/PagesStyles.css';

import SideBar from '../components/SideBar';
import Nav from '../components/Nav';
import ClaimBtn from '../components/ClaimBtn';

import { claims } from '../data/claims';
import { userDetails } from '../data/userDetails';

function HomePage() {
  // const name={userDetails.name};
  // const initials={userDetails.initials};
  // const email={userDetails.email};

  const name="Asia Belfiore";
  const initials="AB";
  const email="a.belfiore@FDM.uk";

  const listClaims = claims.map(claim =>
    <ClaimBtn click="/ProcessClaim" 
              one={claim.employee} 
              two={claim.id} 
              three={claim.type} 
              four={claim.amount}
              five={claim.submission}/>);

  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  }

  const navigate = useNavigate();
  function handleClick(event) {
    navigate('/target-route');
  }

    return (
    <div className="HomePage">
      <span>
      <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      </span>
      <Nav onClick={handleViewSidebar} initials={initials} name={name} email={email}/>
      <div className='bottom'>
          <div className='left'>
            <h5>Pending Claims:</h5>
              <table className='table'>
                <tr>
                  <td>EMPLOYEE</td>
                  <td>CLAIM ID</td>
                  <td>CLAIM TYPE</td>
                  <td>AMOUNT</td>
                  <td>SUBMISSION</td>
                </tr>
              </table>
            <div class="claims">
                <table>
                  <tr><td>{listClaims}</td></tr>
                 </table>
            </div>
          </div>
          <nav class="actions">
            <Link to="/makeClaim"> <button onClick={handleClick}>Claim Expense</button> </Link>
            <Link to="/claims"> <button onClick={handleClick}> Personal Claims </button> </Link>
            <Link to="/myEmployees"> <button onClick={handleClick}> My Employees </button> </Link>
          </nav>
      </div>
    </div>
  );
}

export default HomePage;
