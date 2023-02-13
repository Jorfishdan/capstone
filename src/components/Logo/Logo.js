import "./Logo.scss";
import logo from "../../assets/images/teachers-pet.png";

function Logo() {
    return (
        <>
        <img src={logo} alt="teacher's pet logo" className="logo" />
        </>
    )
}

export default Logo;