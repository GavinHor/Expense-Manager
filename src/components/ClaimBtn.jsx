import '../App.css';

const ClaimBtn=(props)=>{
    return(
            <div className='claimBtn'> 
                <button onClick={alert}> 
                    <p>{props.name}</p>
                    <p>{props.id}</p>
                    <p>{props.amount}</p>
                    <p>{props.date}</p>
                    <p>{props.exp}</p>
                </button>
            </div>
    )
}

export default ClaimBtn;