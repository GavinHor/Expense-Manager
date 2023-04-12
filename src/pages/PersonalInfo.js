import React from 'react';
import { useState} from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import '../pagesStyles/MyDetails.css';


import SideBar from '../components/SideBar';
import Nav from '../components/Nav';

import { userDetails, myEmps } from '../data/userDetails';


function PersonalInfo (){
    const { state } = useLocation();
    const  userId= state.lm;
    const name=userDetails.filter(user=> user.id==userId).map(user=> user.name);
    const initials=userDetails.filter(user=> user.id==userId).map(user=> user.initials);
    const email=userDetails.filter(user=> user.id==userId).map(user=> user.email);

    

    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    }

    const listInfo = userDetails.map(user =>
        <table>
            <tr>
                <td>Name:</td>
                <td className="description">{name}</td>
            </tr>
            <tr>
                <td>Role:</td>
                <td className="description">{userDetails.filter(user=> user.id==userId).map(user=> user.role)}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td className="description">{email}</td>
            </tr>
            <tr>
                <td>Reliability score:</td>
                <td className="description">{userDetails.filter(user=> user.id==userId).map(user=> user.score)}</td>
            </tr>
            <tr>
                <td>Password:</td>
                <td className="description">{userDetails.filter(user=> user.id==userId).map(user=> user.password)}</td>
            </tr>
            <tr>
                <td>Budget:</td>
                <td className="description"> {userDetails.filter(user=> user.id==userId).map(user=> user.spent)}</td>
            </tr>
            <tr>
                <td>Total Allowace:</td>
                <td className="description">{userDetails.filter(user=> user.id==userId).map(user=> user.allowance)}</td>
            </tr>
        </table>);


    const listEmps = myEmps.map(emp =>
            <tr>
                <td>{emp.name}</td>
                <td><Link to={{pathname:"/claims"}}> <input className="button" type="button" value="INFO" />  </Link></td>
            </tr>
            );
    
    const consChange=userDetails.filter(user=> user.role=="Consultant").map(user=> 
        <Link to={{pathname:"/ChangeInfo"}}><button> LOCATION / CURRENCY </button></Link>
    )
        

        return (
            <div className="PersonalInfo">
                <span>
                    <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
                </span>
                <Nav onClick={handleViewSidebar} initials={initials} name={name} email={email}/>
                <header className="header">
                    <div className='left'>
                        <h4>My details</h4>
                        {listInfo}
                    </div >
                    <div className='right' style={{marginBottom: '1em'}}>
                        <h4>My </h4>
                        <table>
                            {listEmps}
                        </table>
                    </div>
                </header>
                <nav className="nav">
                    <Link to={{pathname:"/ChangePassword"}}><button> CHANGE PASSWORD </button></Link>
                    {consChange}
                </nav>
            </div>
        )
    }

export default PersonalInfo;