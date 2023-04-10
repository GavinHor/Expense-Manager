import { useState , useEffect} from 'react';
import '../pagesStyles/PagesStyles.css';
import { Link, useNavigate } from 'react-router-dom';

import SideBar from '../components/SideBar';
import Nav from '../components/Nav';
import ClaimBtn from '../components/ClaimBtn';

import { employees } from '../data/employees';

function MyEmp(){
    const name="Asia Belfiore"
    const initials="AB"
    const email="a.belfiore@FDM.uk"

    const listEmps = employees.map(employee =>
        <tr>
            <td style={{width: '70em'}}><ClaimBtn click="/ProcessClaim" one={employee.name} two={employee.id} three={employee.role} four={employee.score}/> </td>
            <td style={{width: '10em'}}><Link to="/claims"><button  style={{width:'8em'}}className='button'> VIEW CLAIMS</button></Link> </td> 
        </tr>);

    const navigate = useNavigate();


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
                    <table> {listEmps} </table>
                </div>
            </div>
        </div>
    )
}

export default MyEmp;