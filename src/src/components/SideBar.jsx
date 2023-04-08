import React from "react";
import '../pagesStyles/BarsStyle.css';
import logo from '../images/indietro.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const SideBar = (props) => {
  const sidebarClass = props.isOpen ? "sidebar open" : "sidebar";

  const navigate = useNavigate();
  function handleClick(event) {
    navigate('/target-route');
  }

  return (
    <div className={sidebarClass}>
      <nav class="sideCont">
      <Link to="/home"> <button style={{width: "190px"}} onClick={handleClick}> Homepage </button> </Link>
      <Link to="/myDetails"> <button style={{width: "190px"}} onClick={handleClick}> My Information </button> </Link>
      <Link to="/home"> <button style={{width: "190px"}} onClick={handleClick}> Claim Expense </button> </Link>
      <Link to="/claims"> <button style={{width: "190px"}} onClick={handleClick}> Personal Claims </button> </Link>
      <Link to="/myEmployees"> <button style={{width: "190px"}} onClick={handleClick}> My Employees </button> </Link>

       <button className="indietro" onClick={alert}> <img 
        style={{width: '23px', padding:'0px', margin:'0px'}}
        src={logo} alt="indietro"/> </button>
      </nav>
    </div>
  );
};

export default SideBar;