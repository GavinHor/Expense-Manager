import { useState , useEffect} from 'react';
import '../App.css';

import SideBar from '../components/SideBar';
import Nav from '../components/Nav';
import ClaimBtn from '../components/ClaimBtn';
import { wait } from '@testing-library/user-event/dist/utils';


function Claims(){
    const name="Asia Belfiore"
    const initials="AB"
    const email="a.belfiore@FDM.uk"

    const [claims, setClaims] = useState([]);

    // for reference
    /*async function fetchClaims() {
        const response = await fetch('http://localhost:5000/loadClaim', {
            method: "GET",
            mode: "cors"
        })
        if (!response.ok) {
            throw new Error("Network response not OK");
        }
        const jsonData = await response.json();
        console.log(jsonData);
        return jsonData;
    }

    const claims = fetchClaims();*/

    useEffect(() => {
        // Fetch claim data from the backend
        fetch('http://localhost:5000/loadClaim')
        .then(response => response.json())
        .then(data => setClaims(data));
    }, []);

    // old
    /*const listClaims = claims.map(claim =>
        <ClaimBtn click="/ProcessClaim" one={claim.type} two={claim.id} three={claim.amount} four={claim.submission} five={claim.expDate}/>);*/  

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
                    {claims.map(claim => (
                        <ClaimBtn click='/ProcessClaim' key={claim.id}
                            one={claim.type}
                            two={claim.id}
                            three={claim.amount}
                            four={claim.submissionDate}
                            five={claim.expenseDate}
                            />
                    ))}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Claims;