import '../pagesStyles/PagesStyles.css';
import Spline from '@splinetool/react-spline';
import logo from '../images/FDM_icon_noBg.png'

import { useNavigate, Link } from 'react-router-dom';



function Login(){
    var user="a.belfiore@FDM.uk"
    var pw="ciao12345"


    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/target-route');
  }

    return(
    <div className='Login'>
        <div className='left'>
            <div className="title"> EMPLOYEE PORTAL </div>
            <div className="form">
                <form>
                    <label for="email">email:</label>
                    <input type="email" id="email" name="email" className="input_mail"/>
                </form>
                <form id="input_pass">
                    <label for="password">password:</label>
                    <input type="password" id="password" name="password" className="input_pass"/>
                </form>
                <Link to="/home"> <button onClick={handleClick}>Login</button> </Link>
            </div>
        </div>
        <div className="right_side">
            <img src={logo} alt='logo'/>
            <Spline className='anim' scene="https://prod.spline.design/ZZB4e2r-vqN82pQ8/scene.splinecode" />       
        </div>
    </div>
    )
}

export default Login;