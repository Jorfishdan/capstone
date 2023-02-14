import { Link } from "react-router-dom";
import "./InfoCard.scss";
import backArrow from "../../assets/images/left-arrow.png";
import dog4 from "../../assets/images/bark.gif";

function InfoCard() {
  return (
    <section className="infocard">
      <div className="infocard__main-wrapper">
        <Link to="/">
          <img
            src={backArrow}
            alt="go back to main menu"
            className="infocard__back-button"
          ></img>
        </Link>
        <h1 className="infocard__title">Game Instructions</h1>
        <div className="infocard__wrapper">
          <Link to="brainTeaser">
            <div className="infocard__card--1">
              Head Scratchers
              <p className="infocard__card--1-info">
                This true or false game will redirect high energy into a game of
                learning, communication and critical thinking
              </p>
            </div>
          </Link>
          <Link to="cleanup">
            {" "}
            <div className="infocard__card--2">
              Lightning Clean
              <p className="infocard__card--2-info">
                This timed game will have kids racing to clean up and eye
                where the proper places are to put items away while dancing along to some hiphop
              </p>
            </div>
          </Link>
          <Link to="callbacks">
            <div className="infocard__card--3">
              Sneaky Animals
              <p className="infocard__card--3-info">
                Your students will shush each other to listen carefully in order to correctly match the noise to the animals!
              </p>
            </div>
          </Link>
        </div>
        <img
          src={dog4}
          alt="barking dog cartoon gif"
          className="infocard__dog"
        />
      </div>
    </section>
  );
}

export default InfoCard;
