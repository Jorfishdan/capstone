import { Link } from "react-router-dom";
import "./InfoCard.scss";
import dog4 from "../../assets/images/bark.gif";
import house from "../../assets/images/house-static.png";

function InfoCard() {
  return (
    <section className="infocard">
      <div className="infocard__main-wrapper">
        <Link to="/">
         
        </Link>
        <h1 className="infocard__title">Game Instructions</h1>
        <div className="infocard__wrapper">
          <Link to="brainTeaser">
            <div className="infocard__card--1">
              Head Scratchers
              <p className="infocard__card--1-info">
               Click the card of choice and the response will show with the corresponding points. Add to the deck with clicking on the "Add fact here" button on the right side of screen
              </p>
            </div>
          </Link>
          <Link to="cleanup">
            {" "}
            <div className="infocard__card--2">
              Lightning Clean
              <p className="infocard__card--2-info">
               Play a song and start the clock to speed clean. Afterwards, click 'scan' and type out points with feedback that'll be from Mojo. This response will be hidden until you as the educator clicks the checkbox next to the input bar
              </p>
            </div>
          </Link>
          <Link to="callbacks">
            <div className="infocard__card--3">
              Sneaky Animals
              <p className="infocard__card--3-info">
                Have students guys the animal based on its sound. After each card, you can either turn the sound down on your device or directly on the card to make the game increasingly challenging
              </p>
            </div>
          </Link>
          <Link to="mathselect">
            <div className="infocard__card--4">
               Numbers Race
              <p className="infocard__card--4-info">
                Race through addition and subtraction equation as fast as your class can with this timed math game!
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
