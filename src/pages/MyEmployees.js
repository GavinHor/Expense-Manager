import { useState , useEffect} from 'react';
import '../pagesStyles/PagesStyles.css';
import { Link, useNavigate } from 'react-router-dom';

import SideBar from '../components/SideBar';
import Nav from '../components/Nav';
import ClaimBtn from '../components/ClaimBtn';

function MyEmp(){
    const name="Asia Belfiore"
    const initials="AB"
    const email="a.belfiore@FDM.uk"

    const navigate = useNavigate();
    function handleClick(event) {
      navigate('/target-route');
    }

    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);};
    return (
        <div className="Emps">
            <span>
                <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
            </span>
            <Nav onClick={handleViewSidebar} initials={initials} name={name} email={email}/>
            <div className='bottom'> 
                <h5>My Employees:</h5>
                <table className='table'>
                    <tr>
                    <td> NAME</td>
                    <td> ID NUMBER</td>
                    <td>ROLE</td>
                    <td>SCORE</td>
                    <td>CLAIMS</td>
                    </tr>
                </table>
                <div class="list">
                    <table>
                    <tr>
                        <td><ClaimBtn click="/ProcessClaim" one={name} two="AB 0123" three="Consultant " four="91%"/></td>
                        <td><Link to="/claims"><button className='button'> VIEW CLAIMS</button></Link></td>
                    </tr>
                    <tr>
                        <td><ClaimBtn click="/ProcessClaim" one={name} two="AB 0123" three="Consultant " four="91%"/></td>
                        <td><Link to="/claims"><button className='button'> VIEW CLAIMS</button></Link></td>
                    </tr>
                    <tr>
                        <td><ClaimBtn click="/ProcessClaim" one={name} two="AB 0123" three="Consultant " four="91%"/></td>
                        <td><Link to="/claims"><button className='button'> VIEW CLAIMS</button></Link></td>
                    </tr>
                    <tr>
                        <td><ClaimBtn click="/ProcessClaim" one={name} two="AB 0123" three="Consultant " four="91%"/></td>
                        <td><Link to="/claims"><button className='button'> VIEW CLAIMS</button></Link></td>
                    </tr>
                    <tr>
                        <td><ClaimBtn click="/ProcessClaim" one={name} two="AB 0123" three="Consultant " four="91%"/></td>
                        <td><Link to="/claims"><button className='button'> VIEW CLAIMS</button></Link></td>
                    </tr>
                    <tr>
                        <td><ClaimBtn click="/ProcessClaim" one={name} two="AB 0123" three="Consultant " four="91%"/></td>
                        <td><Link to="/claims"><button className='button'> VIEW CLAIMS</button></Link></td>
                    </tr>
                    <tr>
                        <td><ClaimBtn click="/ProcessClaim" one={name} two="AB 0123" three="Consultant " four="91%"/></td>
                        <td><Link to="/claims"><button className='button'> VIEW CLAIMS</button></Link></td>
                    </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyEmp;