import "./Header.scss";
import info from "../../assets/images/info.png";
import list from "../../assets/images/list.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        
        <section className="header">
            <div className="header__wrapper">
                <img src={list} alt="list icon to edit profile" className="header__list"></img>
               <Link to="/mainInfo"><img src={info} alt="info icon for game instructions" className="header__info"></img></Link>                
            </div>
        </section>
    )
}

export default Header;