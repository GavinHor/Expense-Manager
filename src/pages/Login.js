import '../pagesStyles/PagesStyles.css';
import Spline from '@splinetool/react-spline';
import logo from '../images/FDM_icon_noBg.png'

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



function Login(){
    // User Data from Database
    const userEmail="a.belfiore@FDM.uk";
    const userPw="ciao";

    const [email, setEmail] = useState('');
    const [password, setPw] = useState('');

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault(); 
    
        if (email!=userEmail || password!=userPw){
            if (email=='' || password=='') alert('Please input your credentials.');
            else alert('Wrong Credentials.');
        }
        else {
                navigate('/home');
        }
      };


    return(
    <div className='Login'>
        <div className='left'>
            <div className="title"> EMPLOYEE PORTAL </div>
            <form className="form" onSubmit={handleSubmit}>
                <form>
                    <label for="email">email:</label>
                    <input
                            className="input_mail"
                            name="email"
                            type="text"
                            placeholder="FDM Email"
                            onChange={event => setEmail(event.target.value)}
                            value={email}
                            />
                </form>
                <form id="input_pass">
                    <label for="password">password:</label>
                    <input
                            className="input_pass"
                            name="password"
                            type="text"
                            placeholder="Password"
                            onChange={event => setPw(event.target.value)}
                            value={password}
                            />
                </form>
                <button type='submit' onClick={handleSubmit}>Login</button>
            </form>
        </div>
        <div className="right_side">
            <img src={logo} alt='logo'/>
            <Spline className='anim' scene="https://prod.spline.design/ZZB4e2r-vqN82pQ8/scene.splinecode" />       
        </div>
    </div>
    )
}

export default Login;