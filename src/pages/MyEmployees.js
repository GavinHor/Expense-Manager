import { useState , useEffect} from 'react';
import '../App.css';

import SideBar from '../components/SideBar';
import Nav from '../components/Nav';
import ClaimBtn from '../components/ClaimBtn';

function MyEmp(){
    const name="Asia Belfiore"
    const initials="AB"
    const email="a.belfiore@FDM.uk"

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
                        <td><ClaimBtn name={name} id="AB 0123" amount="£ 51.99" date="01/01/ 2023" exp="91%"/></td>
                        <td><button className='button'> VIEW CLAIMS</button></td>
                    </tr>
                    <tr>
                        <td><ClaimBtn name={name} id="AB 0123" amount="£ 51.99" date="01/01/ 2023" exp="91%"/></td>
                        <td><button className='button'> VIEW CLAIMS</button></td>
                    </tr>
                    <tr>
                        <td><ClaimBtn name={name} id="AB 0123" amount="£ 51.99" date="01/01/ 2023" exp="91%"/></td>
                        <td><button className='button'> VIEW CLAIMS</button></td>
                    </tr>
                    <tr>
                        <td><ClaimBtn name={name} id="AB 0123" amount="£ 51.99" date="01/01/ 2023" exp="91%"/></td>
                        <td><button className='button'> VIEW CLAIMS</button></td>
                    </tr>
                    <tr>
                        <td><ClaimBtn name={name} id="AB 0123" amount="£ 51.99" date="01/01/ 2023" exp="91%"/></td>
                        <td><button className='button'> VIEW CLAIMS</button></td>
                    </tr>
                    <tr>
                        <td><ClaimBtn name={name} id="AB 0123" amount="£ 51.99" date="01/01/ 2023" exp="91%"/></td>
                        <td><button className='button'> VIEW CLAIMS</button></td>
                    </tr>
                    <tr>
                        <td><ClaimBtn name={name} id="AB 0123" amount="£ 51.99" date="01/01/ 2023" exp="91%"/></td>
                        <td><button className='button'> VIEW CLAIMS</button></td>
                    </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MyEmp;