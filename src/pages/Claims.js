import { useState , useEffect} from 'react';
import '../App.css';

import SideBar from '../components/SideBar';
import Nav from '../components/Nav';
import ClaimBtn from '../components/ClaimBtn';

function Claims(){
    const name="Asia Belfiore"
    const initials="AB"
    const email="a.belfiore@FDM.uk"
    const claimName="Travel"

    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);};
    return (
        <div className="Claims">
            <span>
                <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
            </span>
            <Nav onClick={handleViewSidebar} initials={initials} name={name} email={email}/>
            <div className='bottom'> 
                <h5>{name}'s Claims:</h5>
                <table className='table'>
                    <tr>
                    <td>CLAIM TYPE</td>
                    <td>CLAIM ID</td>
                    <td>AMOUNT</td>
                    <td>SUBMISSION DATE</td>
                    <td>EXPENSE DATE</td>
                    </tr>
                </table>
                <div class="list">
                    <table>
                    <tr><td><ClaimBtn name={claimName} id="TC1001" amount="£ 51.99" date="01/01/ 2023" exp="01/01/ 2023"/></td></tr>
                    <tr><td><ClaimBtn name={claimName} id="TC1001" amount="£ 51.99" date="01/01/ 2023" exp="01/01/ 2023"/></td></tr>
                    <tr><td><ClaimBtn name={claimName} id="TC1001" amount="£ 51.99" date="01/01/ 2023" exp="01/01/ 2023"/></td></tr>
                    <tr><td><ClaimBtn name={claimName} id="TC1001" amount="£ 51.99" date="01/01/ 2023" exp="01/01/ 2023"/></td></tr>
                    <tr><td><ClaimBtn name={claimName} id="TC1001" amount="£ 51.99" date="01/01/ 2023" exp="01/01/ 2023"/></td></tr>
                    <tr><td><ClaimBtn name={claimName} id="TC1001" amount="£ 51.99" date="01/01/ 2023" exp="01/01/ 2023"/></td></tr>
                    <tr><td><ClaimBtn name={claimName} id="TC1001" amount="£ 51.99" date="01/01/ 2023" exp="01/01/ 2023"/></td></tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Claims;