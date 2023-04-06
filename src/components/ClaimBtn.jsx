import { useNavigate, Link } from 'react-router-dom';

import '../App.css';

const ClaimBtn=(props)=>{
    const navigate = useNavigate();
    function handleClick(event) {
        navigate('/target-route');
    }

    return(
            <div className='claimBtn'> 
                <Link to={props.click}> <button onClick={handleClick}> 
                    <p>{props.one}</p>
                    <p>{props.two}</p>
                    <p>{props.three}</p>
                    <p>{props.four}</p>
                    <p>{props.five}</p>
                </button> </Link>
            </div>
    )
}

export default ClaimBtn;