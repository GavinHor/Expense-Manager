import { useState , useEffect} from 'react';
import { useNavigate , useLocation , Link } from 'react-router-dom';
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

    // user id from prev page
    var { state } = useLocation();
    if (state === null) {
        state = {id: 1}
    }

    // hides and shows fields
    function handleType(e) {
        const type = e.target.value;
        const ex1 = document.getElementById("ex1");
        const ex2 = document.getElementById("ex2");
        const ex3 = document.getElementById("ex3");
        const ex4 = document.getElementById("ex4");
        const ex1label = document.getElementById("ex1-label");
        const ex2label = document.getElementById("ex2-label");
        const ex3label = document.getElementById("ex3-label");
        const ex4label = document.getElementById("ex4-label");
        if (type == "Travel Claim") {
            ex1.style.display = "flex";
            ex2.style.display = "flex";
            ex3.style.display = "none";
            ex4.style.display = "none";
            ex1label.innerHTML = "Transportation Type:";
            ex2label.innerHTML = "Motive:";
        }
        else if (type == "Overnight Stay Claim") {
            ex1.style.display = "flex";
            ex2.style.display = "flex";
            ex3.style.display = "flex";
            ex4.style.display = "none";
            ex1label.innerHTML = "Structure Type:";
            ex2label.innerHTML = "Structure Name:";
            ex3label.innerHTML = "Checkout Date:";
        }
        else if (type == "Meal Claim") {
            ex1.style.display = "flex";
            ex2.style.display = "flex";
            ex3.style.display = "flex";
            ex1label.innerHTML = "Meal Type:"
            ex2label.innerHTML = "Dining Location:"
            ex3label.innerHTML = "Structure Type:"
        }
        else if (type == "Purchase Claim") {
            ex1.style.display = "flex";
            ex2.style.display = "flex";
            ex3.style.display = "flex";
            ex4.style.display = "flex";
            ex1label.innerHTML = "Purchase Type:"
            ex2label.innerHTML = "No. of Items:"
            ex3label.innerHTML = "Store of Purchase:"
            ex4label.innerHTML = "Items:"
        }
    }

    return (
        <div className='MakeClaim'>
            <span>
                <SideBar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
            </span>
            <Nav onClick={handleViewSidebar} initials={initials} name={name} email={email}/>
            <form className='middle' id="claimform" action='http://localhost:5000/submitClaim' method='POST'>
                <input {...register("id")} type="hidden" value={state.id}></input>

                <div className='left'>
                    <h1>Claim Form:</h1>
                        <table>
                            <tr>
                                <td><label>Type:</label></td>
                                <td>
                                    <select {...register("type", {required: true})} onChange={handleType} className='description' defaultValue="Travel Claim">
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
                            </tr>
                            <tr id="ex1">
                                <td><label id="ex1-label">Transportation</label></td>
                                <td>
                                    <input {...register("extra1")} className='description' type='text'></input>
                                </td>
                            </tr>
                            <tr id="ex2">
                                <td><label id="ex2-label">Motive</label></td>
                                <td>
                                    <input {...register("extra2")} className='description' type='text'></input>
                                </td>
                            </tr>
                            <tr id="ex3" style={{display: "none"}}>
                                <td><label id="ex3-label">a</label></td>
                                <td>
                                    <input {...register("extra3")} className='description' type='text'></input>
                                </td>
                            </tr>
                            <tr id="ex4" style={{display: "none"}}>
                                <td><label id="ex4-label">b</label></td>
                                <td>
                                    <textarea {...register("extra4")} className='description'></textarea>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className='right'>
                    <h1>Expense Proof:</h1>
                    <div className='exProof'>
                        {/* Display image tag only if image not null */}
                        {proofImage ? (<img src={proofImage} alt='Proof image'></img>) : null}
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
                    </div>
                </div>
            </form>
            <nav className="nav">
              <Link><button type='submit' onClick={handleSubmit(onSubmit)}> SUBMIT </button></Link>
              <Link to="/home"><button formAction='' onClick={handleClick}> CANCEL </button></Link>
            </nav>
        </div>
    )
}

export default MakeClaim;