import { Link } from "react-router-dom";
import "./InfoCard.scss";
import backArrow from "../../assets/images/left-arrow.png";
import dog4 from "../../assets/images/bark.gif";
import house from "../../assets/images/house-static.png";

function InfoCard() {
  return (
    <section className="infocard">
      <div className="infocard__main-wrapper">
        <Link to="/">
          <img
            src={house}
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
                learning, communication and critical thinking. Click the card of choice and the response will show with the corresponding points. Add to the deck with clicking on the "Add fact here" button on the right side of screen
              </p>
            </div>
          </Link>
          <Link to="cleanup">
            {" "}
            <div className="infocard__card--2">
              Lightning Clean
              <p className="infocard__card--2-info">
                This timed game will have kids racing to clean up and eye
                where the proper places are to put items away while dancing along to some hiphop. Afterwards, click 'scan' and type out points with feedback that'll be from Mojo. This response will be hidden until you as the educator clicks the checkbox next to the input bar
              </p>
            </div>
          </Link>
          <Link to="callbacks">
            <div className="infocard__card--3">
              Sneaky Animals
              <p className="infocard__card--3-info">
                Your students will shush each other to listen carefully in order to correctly match the noise to the animals! After each card, you can either turn the sound down on your device or directly on the card to make the game increasingly challenging
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
