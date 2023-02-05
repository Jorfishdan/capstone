import "./HomePageCards.scss";
import logo from "../../assets/images/teachers-pet.png"
import spin from "../../assets/images/spinning-cat.gif";

function HomePageCards() {
  return (
    <>
    <section className="homepagecard">
      <div className="homepagecard__mega-wrapper">
      <img src={logo} alt="logo" className="homepagecard__logo" />
    <article className="homepagecard__wrapper">
      <h1 className="homepagecard__card--1">Brain Teaser</h1>
      <h1 className="homepagecard__card--2">Clean Up</h1>
      <h1 className="homepagecard__card--3">Call Backs</h1>
    </article>
    </div>
    </section>
    </>
  );
}

export default HomePageCards;