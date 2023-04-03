import '../PagesStyles.css';
import Spline from '@splinetool/react-spline';
import logo from '../images/FDM_icon_noBg.png'


function Login(){
    return(
    <div className='Login'>
        <div className='left'>
            <div className="title"> Login Employee Portal </div>
            <div className="form">
                <form>
                    <label for="email">email:</label>
                    <input type="email" id="email" name="email" className="input_mail"/>
                </form>
                <form id="input_pass">
                    <label for="password">password:</label>
                    <input type="password" id="password" name="password" className="input_pass"/>
                </form>
                <button onClick={alert}>Login</button>
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