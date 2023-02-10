import "./HomePageCards.scss";
import dog from "../../assets/images/dogMascot.gif"
import { Link } from "react-router-dom";

function HomePageCards() {
  return (
    <>
    <section className="homepagecard">
    
      <div className="homepagecard__mega-wrapper">
      <h1 className="homepagecard__title">Teacher's Pet</h1>
      <img className="homepagecard__dog" src={dog} alt="dog" />
     
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