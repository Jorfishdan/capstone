import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePageCards from "../../components/HomePageCards/HomePageCards";
import dog from "../../assets/images/dogMascot.gif";
import dog2 from "../../assets/images/dog2.png";
import HomepageSlogan from "../../components/HomepageSlogan/HomepageSlogan";
import HPBubbles from "../../components/HPBubbles/HPBubbles";
import MainCircle from "../../components/MainCircle/MainCircle";
import info from "../../assets/images/info-static.png";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <>
      <section className="homepage">
        <div className="homepage__info-wrapper">
      <Link to="/mainInfo"><img src={info} alt="info icon to read game instructions" className="homepage__info" /></Link>
      </div>
        <MainCircle />
        <div className="homepage__main-wrapper">
         
        </div>
        <div className="homepage__circle3"></div>
        <div className="homepage__circle4"></div>
        <div className="homepage__circle5"></div>
        <div className="homepage__circle6"></div>
        <div className="homepage__circle7"></div>
        <div className="homepage__circle8"></div>
        <div className="homepage__circle9"></div>
        <HPBubbles />
        <Footer />
      </section>
    </>
  );
}

export default HomePage;
