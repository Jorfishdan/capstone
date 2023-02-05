import "./Header.scss";
import info from "../../assets/images/info.png";
import list from "../../assets/images/list.png";

function Header() {
    return (
        <section className="header">
            <div className="header__wrapper">
                <img src={list} alt="list icon to edit profile" className="header__list"></img>
                <img src={info} alt="info icon for game instructions" className="header__info"></img>                
            </div>
        </section>
    )
}

export default Header;