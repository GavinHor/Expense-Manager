import React from 'react';
import { useState} from 'react';
import { useNavigate , Link } from 'react-router-dom';
import '../pagesStyles/reportClaim.css';

import SideBar from '../components/SideBar';
import Nav from '../components/Nav';

import { userDetails } from '../data/userDetails';
import { claims } from '../data/claims';


export default function ReportClaim (){
    const name=userDetails.map(user=> user.name);
    const initials=userDetails.map(user=> user.initials);
    const email=userDetails.map(user=> user.email);

    const listClaims = claims.filter(claim => claim.id=='TC001AB').map(claim =>
        <table>
            <tr>
                <td><span>Type:</span></td>
                <td className='desc'>{claim.type}</td>
            </tr>
            <tr>
                <td><span>Amount:</span></td>
                <td className='desc'>{claim.amount}</td>
            </tr>
            <tr>
                <td><span>Expense date:</span></td>
                <td className='desc'>{claim.expDate}</td>
            </tr>
            <tr>
                <td><span>Location:</span></td>
                <td className='desc'>London, UK<span> to </span>Rome, IT</td>
            </tr>
            <tr>
                <td><span>Transportation:</span></td>
                <td className='desc'>flight FR1006</td>
            </tr>
        </table>);

    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    }
    
    const navigate = useNavigate();
    const handleClick = event => {
        event.preventDefault(); 
        alert('Claim successfully reported.')
        navigate('/home')
        };
      

    return(
        <div classNameName='ReportClaim'>
            <span>
                <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
            </span>
            <Nav onClick={handleViewSidebar} initials={initials} name={name} email={email}/>
        <div className="main">
            <div className="card-element" >
                <div className="claimInfo">
                    <h2>Expense Details</h2>
                    <div className="claimDet">
                    {listClaims}
                    </div>
                </div>
                <div className="empInfo">
                    <h2>Employee Details</h2>
                    <div className="empDet">
                    <table>
                        <tr>
                            <td><span>Name:</span></td>
                            <td  className='desc'>{name}</td>
                        </tr>
                        <tr>
                            <td><span>Role:</span></td>
                            <td className='desc'>{userDetails.map(user=> user.role)}</td>
                        </tr>
                        <tr>
                            <td><span>Email:</span></td>
                            <td className='desc'>{email}</td>
                        </tr>
                        <tr>
                            <td><span>Reliability Score:</span></td>
                            <td className='desc'>{userDetails.map(user=> user.score)}</td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
            <div>
                <div className="btns">
                    <button onClick={handleClick}>REPORT FRAUD SUSPICION</button>
                    <button onClick={handleClick}>REPORT INCORRECT INFORMATION</button>   
                    <Link to={{pathname:"/ProcessClaim"}}><button> CANCEL </button></Link> 
                </div>
                <div className="expl">
                    <h2>Report Reason and Further Explanation: </h2>
                    <input type='text' className='justify' style={{fontSize:'20px'}}/>
                </div>
            </div>
        </div>
        </div>
    )
}