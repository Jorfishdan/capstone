import "./HomePageCards.scss";
// import logo from "../../assets/images/teachers-pet.png"
import spin from "../../assets/images/spinning-cat.gif";
import { Link } from "react-router-dom";

function HomePageCards() {
  return (
    <>
    <section className="homepagecard">
      <div className="homepagecard__mega-wrapper">
      {/* <img src={logo} alt="logo" className="homepagecard__logo" /> */}
    <article className="homepagecard__wrapper">
     <Link to="/brainTeaser"><h1 className="homepagecard__card--1">Head Scatchers</h1></Link> 
      <Link to="/cleanup"><h1 className="homepagecard__card--2">Lightning Clean</h1></Link>
      <Link to="/callbacks"><h1 className="homepagecard__card--3">Sneaky Animals</h1></Link>
    </article>
    </div>
    </section>
    </>
  );
}

export default HomePageCards;