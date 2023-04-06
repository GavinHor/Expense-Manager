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
    setSideBarOpen(!sidebarOpen);};
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
                                <td><input name='type' type='text'></input></td>
                            </tr>
                            <tr>
                                <td><label>Amount:</label></td>
                                <td><input name='amount' type='text'></input></td>
                            </tr>
                            <tr>
                                <td><label>Currency:</label></td>
                                <td>
                                <select name='currency'></select>
                                <optgroup>
                                    <option>£</option>
                                    <option>$</option>
                                    <option>€</option>
                                </optgroup>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Expense Date:</label></td>
                                <td><input name='date' type='text'></input></td>
                            </tr>
                            <tr>
                                <td><label>Motive:</label></td>
                                <td><input name='motive' type='text'></input></td>
                            </tr>
                            <tr>
                                <td><label>Extra Details:</label></td>
                                <td><textarea name='extra'></textarea></td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div className='right'>
                    <h1>Expense Proof:</h1>
                    <div className='exProof'>
                    <img></img>
                        <table>
                            <tr className='vat'>
                                <td>VAT:</td>
                                <td className="description" >£ 10.12</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <nav className="nav">
              <button formAction='' formMethod=''> SUBMIT </button>
              <button formAction='' formMethod=''> CANCEL </button>
            </nav>
        </div>
    )
}

export default MakeClaim;