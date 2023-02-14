import { Link } from 'react-router-dom';
import './CallBacksHeader.scss';
import house from "../../assets/images/house-static.png";
import vetPic from "../../assets/images/veterinary.png";
import dogFood from "../../assets/images/dog-food.png";
function CallBacksHeader() {
    return(<>
       <div className="callBacksHeader">
        <Link to="/">
        <img
          src={house}
          alt="home icon to return to main menu"
          className="callBacksHeader__home"
        />
      </Link>
      <span className="callBacksHeader__title">Teacher's Pet</span>
      <div className="callBacksHeader__icon-wrapper">
      <Link to="/brainteaser">
        <img
          src={vetPic}
          alt="icon to brainteaser page"
          className="callBacksHeader__brainteaser-link"
        />
      </Link>
      <Link to="/cleanup">
        <img
          src={dogFood}
          alt="icon to cleanup page"
          className="callBacksHeader__cleanup-link"
        />
      </Link>
      </div>
      </div>
    </>)
}

export default CallBacksHeader;