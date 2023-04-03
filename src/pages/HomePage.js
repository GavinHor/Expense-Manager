import React from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';

import '../PagesStyles.css';

import SideBar from '../components/SideBar';
import Nav from '../components/Nav';
import ClaimBtn from '../components/ClaimBtn';
import { Link } from 'react-router-dom';

function HomePage() {
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
                  <td>EMPLOYEE ID</td>
                  <td>AMOUNT</td>
                  <td>SUBMISSION</td>
                </tr>
              </table>
            <div class="claims">
                <table>
                  <tr><td><ClaimBtn name={name} id="AB 0123" amount="£ 51.99" date="01/01/ 2023"/></td></tr>
                  <tr><td><ClaimBtn name={name} id="AB 0123" amount="£ 51.99" date="01/01/ 2023"/></td></tr>
                  <tr><td><ClaimBtn name={name} id="AB 0123" amount="£ 51.99" date="01/01/ 2023"/></td></tr>
                  <tr><td><ClaimBtn name={name} id="AB 0123" amount="£ 51.99" date="01/01/ 2023"/></td></tr>
                  <tr><td><ClaimBtn name={name} id="AB 0123" amount="£ 51.99" date="01/01/ 2023"/></td></tr>
                  <tr><td><ClaimBtn name={name} id="AB 0123" amount="£ 51.99" date="01/01/ 2023"/></td></tr>
                  <tr><td><ClaimBtn name={name} id="AB 0123" amount="£ 51.99" date="01/01/ 2023"/></td></tr>
                </table>
            </div>
          </div>
          <nav class="actions">
            <Link to="/claims"> <button onClick={handleClick}>Claim Expense</button> </Link>
            <Link to="/claims"> <button onClick={handleClick}> Personal Claims </button> </Link>
            <Link to="/claims"> <button onClick={handleClick}> My Employees </button> </Link>
          </nav>
      </div>
    </div>
  );
}

export default HomePage;
