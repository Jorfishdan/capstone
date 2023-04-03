import "./MenuModal.scss";
import clock from "../../assets/images/pocket-watch.png";
import vet from "../../assets/images/veterinary.png";
import pet from "../../assets/images/pawprint.png";
import food from "../../assets/images/dog-food.png";
import tag from "../../assets/images/dog-tag.png";
import info from "../../assets/images/info-static.png";
import { Link } from "react-router-dom";

function MenuModal({ closeModal }) {
  return (
    <>
      <section className="menumodal">
        <Link to="/clock">
        <div className="menumodal__header">
          <img src={clock} alt="clock icon" className="menumodal__img" />
          <span className="menumodal__title">Timer</span>
        </div>
        </Link>
        <Link to="mainInfo/brainTeaser"> 
        <div className="menumodal__header">
          <img src={vet} alt="clock icon" className="menumodal__img" />
          <span className="menumodal__title">Head Scratcher</span>
        </div>
        </Link>
        <Link to="mainInfo/cleanup"> 
        <div className="menumodal__header">
          <img src={food} alt="clock icon" className="menumodal__img" />
          <span className="menumodal__title">Lightening Clean</span>
        </div>
        </Link>
        <Link to="mainInfo/callbacks"> 
        <div className="menumodal__header">
          <img src={pet} alt="clock icon" className="menumodal__img" />
          <span className="menumodal__title">Sneaky Animals</span>
        </div>
        </Link>
        <Link to="mainInfo/mathselect"> 
        <div className="menumodal__header">
          <img src={tag} alt="clock icon" className="menumodal__img" />
          <span className="menumodal__title">Numbers Race</span>
        </div>
        </Link>
        <Link to="/mainInfo"> 
        <div className="menumodal__header">
          <img src={info} alt="clock icon" className="menumodal__img--info" />
          <span className="menumodal__title">Info</span>
        </div>
        </Link>
      </section>
    </>
  );
}

export default MenuModal;
