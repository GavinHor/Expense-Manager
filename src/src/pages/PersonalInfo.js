import React from 'react';
import { useState} from 'react';
import { useNavigate , Link } from 'react-router-dom';
import '../pagesStyles/MyDetails.css';

import SideBar from '../components/SideBar';
import Nav from '../components/Nav';

function PersonalInfo ({}){
    const name="Asia Belfiore"
    const initials="AB"
    const email="a.belfiore@FDM.uk"


    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/target-route');
    }

    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
        setSideBarOpen(!sidebarOpen);
    }

        return (
            <div className="PersonalInfo">
                <span>
                    <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
                </span>
                <Nav onClick={handleViewSidebar} initials={initials} name={name} email={email}/>
                <header className="header">
                    <div className='left'>
                        <h4>My details</h4>
                        <table>
                            <tr>
                                <td>Name:</td>
                                <td className="description">{name}</td>
                            </tr>
                            <tr>
                                <td>Role:</td>
                                <td className="description">Line Manager</td>
                            </tr>
                            <tr>
                                <td>Email:</td>
                                <td className="description">{email}</td>
                            </tr>
                            <tr>
                                <td>Reliability score:</td>
                                <td className="description">95%</td>
                            </tr>
                            <tr>
                                <td>Password:</td>
                                <td className="description">********9</td>
                            </tr>
                        </table>
                    </div >
                    <div className='right' style={{marginBottom: '1em'}}>
                        <h4>My Employees</h4>
                        <table>
                            <tr>
                                <td>Asia Belfiore</td>
                                <td><Link to="/claims"> <input onClick={handleClick} className="button" type="button" value="INFO" />  </Link></td>
                            </tr> 
                            <tr>
                                <td>Daniel Mascerne</td>
                                <td><Link to="/claims"> <input onClick={handleClick} className="button" type="button" value="INFO" />  </Link></td>
                            </tr> 
                            <tr>
                                <td>Gavin Hor</td>
                                <td><Link to="/claims"> <input onClick={handleClick} className="button" type="button" value="INFO" />  </Link></td>
                            </tr> 
                            <tr>
                                <td>Vasileios Vogiatzis</td>
                                <td><Link to="/claims"> <input onClick={handleClick} className="button" type="button" value="INFO" />  </Link></td>
                            </tr> 
                            <tr className="view">
                                <td>
                                <Link to="/myEmployees"> <input onClick={handleClick} className="button" type="button" value="View All" />  </Link>
                                </td>
                            </tr>
                        </table>
                    </div>
                </header>
                <nav className="nav">
                    <Link to="/home"><button onClick={handleClick}> CHANGE PASSWORD </button></Link>
                    <Link to="/home"><button onClick={handleClick}> DISPLAY BUDGET </button></Link>
                </nav>
            </div>
        )
    }

export default PersonalInfo;