ReactDOM.render(
    <div>
        <div className="upperSec">
            <div className="left">
                <nav className="claimSec"> 
                    <h1> Claim Details: </h1>
                    <table className="table">
                        <tr>
                            <td className="title"> Type: </td>
                            <td> transportation  </td>
                        </tr>
                        <tr>
                            <td className="title"> Amount: </td>
                            <td>  £ 51.99 </td>
                        </tr>
                        <tr>
                            <td className="title"> Expense Date: </td>
                            <td> 29/12/2022  </td>
                        </tr>
                        <tr>
                            <td className="title"> Location: </td>
                            <td>  London, UK - Rome,IT</td>
                        </tr>
                        <tr>
                            <td className="title"> Transportation Type: </td>
                            <td> flight FR1006 </td>
                        </tr>
                    </table>
                </nav>
                <nav className="empSec">
                    <h1> Employee Details: </h1>
                    <table className="table">
                        <tr>
                            <td className="title"> Name: </td>
                            <td> Asia Belfiore  </td>
                        </tr>
                        <tr>
                            <td className="title"> Role: </td>
                            <td> consultant  </td>
                        </tr>
                        <tr>
                            <td className="title"> Email: </td>
                            <td> a.belfiore@FDM.uk  </td>
                        </tr>
                        <tr>
                            <td className="title"> Reliability Score: </td>
                            <td> 81%  </td>
                        </tr>
                    </table>
                </nav>
            </div>
            <div className="right">
                <h1> Proof of Expense: </h1>
                <table className="proof">
                    <tr>
                        <td><img src="BP.jpeg"/>  </td>
                    </tr>
                    <tr>
                        <td className="title"> VAT: </td>
                        <td> £11  </td>
                    </tr>
                </table>
            </div>
        </div>
        <div className="bottomSec">
            <button> APPROVE</button>
            <button> REPORT</button>
        </div>
    </div>,
    document.getElementById('top'));