import { useState , useEffect} from 'react';
import { useNavigate , Link } from 'react-router-dom';

import '../pagesStyles/makeClaim.css';

import SideBar from '../components/SideBar';
import Nav from '../components/Nav';

function MakeClaim(){
    const name="Asia Belfiore"
    const initials="AB"
    const email="a.belfiore@FDM.uk"

    const [sidebarOpen, setSideBarOpen] = useState(false);
    const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);}

    // for proof image
    const [proofImage, setProofImage] = useState(null);

    const handleSubmit = event => {
        event.preventDefault();
    }

    const navigate = useNavigate();
    function handleClick(event) {
      navigate('/target-route');
    }

    return (
        <div className='MakeClaim'>
            <span>
                <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
            </span>
            <Nav onClick={handleViewSidebar} initials={initials} name={name} email={email}/>
            <div className='middle'>
                <div className='left'>
                    <h1>Claim Form:</h1>
                    <form>
                        <table>
                            <tr>
                                <td><label>Type:</label></td>
                                <td>
                                    <select className='description' name='type'>
                                        <optgroup defaultValue={"Travel Claim"}>
                                            <option>Travel Claim</option>
                                            <option>Overnight Stay Claim</option>
                                            <option>Meal Claim</option>
                                            <option>Purchase Claim</option>
                                        </optgroup>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Amount:</label></td>
                                <td><input className='description' name='amount' type='text'></input></td>
                            </tr>
                            <tr>
                                <td><label>Expense Date:</label></td>
                                <td><input className='description' name='date' type='text'></input></td>
                            </tr>
                            <tr>
                                <td><label>Currency:</label></td>
                                <td>
                                <select className='description' name='currency'>
                                    <optgroup defaultValue={"£ - GBP"}>
                                        <option>£ - GBP</option>
                                        <option>$ - USD</option>
                                        <option>€ - EUR</option>
                                        <option>Other</option>
                                    </optgroup>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Motive:</label></td>
                                <td><input className='description' name='motive' type='text'></input></td>
                            </tr>
                            <tr>
                                <td><label>Extra Details:</label></td>
                                <td><textarea className='description' name='extra'></textarea></td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div className='right'>
                    <h1>Expense Proof:</h1>
                    <div className='exProof'>
                    <img src={proofImage} alt='Proof image'></img>
                        <form method='POST'>
                            <input
                                type='file'
                                name='proofImage'
                                onChange={(event) => {
                                    const file = event.target.files[0];
                                    console.log(file);
                                    const imageUrl = URL.createObjectURL(file);
                                    setProofImage(imageUrl);
                                }}
                            >
                            </input>
                            <table>
                                <tr className='vat'>
                                    <td>VAT:</td>
                                    <td><input className='description' type='text'></input></td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
            <nav className="nav">
              <Link><button type='submit' onClick={handleSubmit}> SUBMIT </button></Link>
              <Link to="/home"><button formAction='' onClick={handleClick}> CANCEL </button></Link>
            </nav>
        </div>
    )
}

export default MakeClaim;