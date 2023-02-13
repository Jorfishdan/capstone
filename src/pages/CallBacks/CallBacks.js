import "./CallBacks.scss"
// import AnimalNoises from "../../components/AnimalNoises/AnimalNoises";
import AnimalNoises from "../../components/AnimalNoises/AnimalNoises";
import CallBackPts from "../../components/CallBackPts/CallBackPts";
import house from "../../assets/images/house-static.png";
import { Link } from "react-router-dom";
import vetPic from "../../assets/images/veterinary.png";
import dogFood from "../../assets/images/dog-food.png";
import CountDown from "../../components/CountDown/CountDown";
import CallBackPets from "../../components/CallbackPet/CallbackPet";
import HPBubbles from "../../components/HPBubbles/HPBubbles";

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
      <span className="callbacks__title">Teacher's Pet</span>
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
      
        <CountDown />
        <CallBackPts />
        <CallBackPets />
        <AnimalNoises />
        <HPBubbles />
        </>
    )
}

export default Callbacks;