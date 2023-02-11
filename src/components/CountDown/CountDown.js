import "./CountDown.scss";
import staticCount from "../../assets/images/staticCountDown.png";
import gifCount from "../../assets/images/visualCountDown.gif";
function CountDown() {
    return (<>
    <img src={staticCount} alt="static countdown" className="countdown__static" />
    <img src={gifCount} alt="gif of countdown" className="countdown__gif" />
    </>)
    
}

export default CountDown;