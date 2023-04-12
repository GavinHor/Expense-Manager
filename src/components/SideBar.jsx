import React from "react";
import '../pagesStyles/BarsStyle.css';
import logo from '../images/indietro.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { userDetails } from "../data/userDetails";


const SideBar = (props) => {
  var id="1";
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";

  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault(); 
    navigate(-1);
  }

  function handleClick(event, pathname){
    navigate('/home', { state: { id: id } });
  };

  const empList=userDetails.filter(user=> user.role=="Line Manager").map(user=> 
      <Link to={{pathname:"/myEmployees"}}> <button style={{width: "190px"}}> My Employees </button> </Link>)

  return (
    <div className={sidebarClass}>
      <nav className="sideCont">
       <button onClick={handleClick} style={{width: "190px"}}> Homepage </button> 
      <Link to={{pathname:'/myDetails'}}> <button style={{width: "190px"}}> My Information </button> </Link>
      <Link to={{pathname:'/MakeClaim'}}> <button style={{width: "190px"}}> Claim Expense </button> </Link>
      <Link to={{pathname:"/claims"}}> <button style={{width: "190px"}}> Personal Claims </button> </Link>
      {empList}

       <button className="indietro" onClick={handleClick}> <img 
        style={{width: '23px', padding:'0px', margin:'0px'}}
        src={logo} alt="indietro"/> </button>
      </nav>
    </div>
  );
};

export default SideBar;