import "./Header.scss";
import info from "../../assets/images/info.png";
import list from "../../assets/images/list.png";
import logout from "../../assets/images/logout.png";
import information from "../../assets/images/information.gif"
import staticInfo from "../../assets/images/info-static.png";
import { Link } from "react-router-dom";

function Header() {
    return (
        
        <section className="header">
            <div className="header__wrapper">
                {/* <img src={logout} alt="logout icon" className="header__logout" /> */}
                {/* <img src={list} alt="list icon to edit profile" className="header__list"></img> */}
               {/* <Link to="/mainInfo"><img src={staticInfo}className="header__info"></img></Link>                 */}
            </div>
        </section>
    )
}

export default Header;