import "./Header.scss";
import staticInfo from "../../assets/images/info-static.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <div className="header__wrapper">
        <Link to="/mainInfo">
          <img src={staticInfo} className="header__info"></img>
        </Link>
      </div>
    </section>
  );
}

export default Header;
