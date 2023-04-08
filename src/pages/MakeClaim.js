import { useState , useEffect} from 'react';
import { useNavigate , Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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

    // requires react-hook-form for form validation
    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = (data) => {
        document.getElementById("claimform").submit();
    }

    // cancel button
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
                    <form id="claimform" action='/expenseClaimInfo'>
                        <table>
                            <tr>
                                <td><label>Type:</label></td>
                                <td>
                                    <select {...register("type", {required: true})} className='description' defaultValue="Travel Claim">
                                            <option>Travel Claim</option>
                                            <option>Overnight Stay Claim</option>
                                            <option>Meal Claim</option>
                                            <option>Purchase Claim</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Amount:</label></td>
                                <td>
                                    <input {...register("amount", {required: true})} id='amount' className='description' type='text'></input>
                                    {errors.amount?.type === 'required' && (<p className='error'>Amount is required</p>)}    
                                </td>
                                
                            </tr>
                            <tr>
                                <td><label>Expense Date:</label></td>
                                <td>
                                    <input {...register("date", {required: true})} className='description' type='text'></input>
                                    {errors.date?.type === 'required' && (<p className='error'>Date is required</p>)}
                                </td>
                            </tr>
                            <tr>
                                <td><label>Currency:</label></td>
                                <td>
                                <select {...register("currency", {required: true})} className='description' defaultValue="£ - GBP">
                                        <option>£ - GBP</option>
                                        <option>$ - USD</option>
                                        <option>€ - EUR</option>
                                        <option>Other</option>
                                </select>
                                </td>
                            </tr>
                            <tr>
                                <td><label>Motive:</label></td>
                                <td>
                                    <input {...register("motive", {required: true})} className='description' type='text'></input>
                                    {errors.motive?.type === 'required' && (<p className='error'>Motive is required</p>)}
                                </td>
                            </tr>
                            <tr>
                                <td><label>Extra Details:</label></td>
                                <td><textarea {...register("extra")} className='description'></textarea></td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div className='right'>
                    <h1>Expense Proof:</h1>
                    <div className='exProof'>
                    <img src={proofImage} alt='Proof image'></img>
                        <form>
                            {/* Image uploader element */}
                            <input
                                {...register("proofImage", {required: true})}
                                type='file'
                                onChange={(event) => {
                                    const file = event.target.files[0];
                                    console.log(file);
                                    const imageUrl = URL.createObjectURL(file);
                                    setProofImage(imageUrl);
                                }}
                            >
                            </input>
                            {errors.proofImage?.type === 'required' && (<p className='error'>Proof Image is required</p>)}
                            <table>
                                <tr className='vat'>
                                    <td>VAT:</td>
                                    <td><input {...register("vat")} className='description' type='text'></input></td>
                                </tr>
                            </table>
                        </form>
                    </div>
                </div>
            </div>
            <nav className="nav">
              <Link><button type='submit' onClick={handleSubmit(onSubmit)}> SUBMIT </button></Link>
              <Link to="/home"><button formAction='' onClick={handleClick}> CANCEL </button></Link>
            </nav>
        </div>
    )
}

export default MakeClaim;