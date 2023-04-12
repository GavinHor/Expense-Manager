import React from 'react';
import { useState} from 'react';
import { useNavigate , Link } from 'react-router-dom';

import '../pagesStyles/PagesStyles.css';

import SideBar from './SideBar';
import Nav from './Nav';

import { userDetails } from '../data/userDetails';

export default function ChangeLocation(){
    const name=userDetails.map(user=> user.name);
    const initials=userDetails.map(user=> user.initials);
    const email=userDetails.map(user=> user.email);
    const oldPw=userDetails.map(user=> user.password);

    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
  }

    const navigate = useNavigate();
    const [newLoc, setLoc] = useState('');
    const [newCurr, setCurr] = useState('');

    const handleClick = event => {
        event.preventDefault(); 
        alert('Information updated successfully.');
        navigate('/home');
        }
      


    return (
        <div className='ChangeInfo'>
            <span>
                <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
            </span>
            <Nav onClick={handleViewSidebar} initials={initials} name={name} email={email}/>
            <div className='middle'>
                <h3>CHANGE LOCATION</h3>
                <table>
                    <tr>
                        <td><label>Available Locations:</label></td>
                        <td>
                            <select className='description' defaultValue="United Kingdom" 
                                    style={{width:'2em', fontSize:'3em'}}>
                                        <option>United Kingdom</option>
                                        <option>US</option>
                                        <option>Germany</option>
                                        <option>Australia</option>
                                        <option>Hong Kong</option>
                                        <option>China</option>
                                        <option>Singapore</option>
                                        <option>North America</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                    <td><label>Available Currencies:</label></td>
                        <td>
                            <select className='description' defaultValue="£ - GBP" 
                                    style={{width:'1em', fontSize:'3em'}}>
                                        <option>£ - GBP</option>
                                        <option>$ - USD</option>
                                        <option>€ - EUR</option>
                                        <option>Other</option>
                            </select>
                        </td>
                    </tr>
                    
                </table>    
            </div>
            <nav className="nav">
                 <button onClick={handleClick}>CONFIRM</button> 
                 <Link to={{pathname:'/myDetails'}}><button> CANCEL </button> </Link>
            </nav>
        </div>

    )
}