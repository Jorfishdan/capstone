import "./CallBacks.scss"
import AnimalNoises from "../../components/AnimalNoises/AnimalNoises";
import CallBackPts from "../../components/CallBackPts/CallBackPts";
import house from "../../assets/images/house-static.png";
import { Link } from "react-router-dom";
import vetPic from "../../assets/images/veterinary.png";
import dogFood from "../../assets/images/dog-food.png";

function Callbacks() {
    return (
        <>
        <div className="callbacks">
        <Link to="/">
        <img
          src={house}
          alt="home icon to return to main menu"
          className="callbacks__home"
        />
      </Link>
      <div className="callbacks__icon-wrapper">
      <Link to="/brainteaser">
        <img
          src={vetPic}
          alt="icon to brainteaser page"
          className="callbacks__brainteaser-link"
        />
      </Link>
      <Link to="/cleanup">
        <img
          src={dogFood}
          alt="icon to cleanup page"
          className="callbacks__cleanup-link"
        />
      </Link>
      </div>
      </div>
        <CallBackPts />
        <AnimalNoises />
        </>
    )
}

export default Callbacks;