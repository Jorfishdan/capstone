import "./HomePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePageCards from "../../components/HomePageCards/HomePageCards";
import dog from "../../assets/images/dogMascot.gif";
import dog2 from "../../assets/images/dog2.png";
import HomepageSlogan from "../../components/HomepageSlogan/HomepageSlogan";
import HPBubbles from "../../components/HPBubbles/HPBubbles";
import MainCircle from "../../components/MainCircle/MainCircle";


function HomePage() {
  return (
    <>
      <section className="homepage">
        <Header />
        <MainCircle />
        {/* <HomepageSlogan /> */}
        {/* <div className="homepage__main-circle"></div> */}
        {/* <div className="homepage__feature-circle"></div>

        <div className="homepage__circle"></div> */}

        {/* <div className="homepage__circle2"></div> */}
        <div className="homepage__main-wrapper">
          {/* <HomePageCards /> */}
        </div>
        <div className="homepage__circle3"></div>
        <div className="homepage__circle4"></div>
        <div className="homepage__circle5"></div>
        <div className="homepage__circle6"></div>
        <div className="homepage__circle7"></div>
        <div className="homepage__circle8"></div>
        <div className="homepage__circle9"></div>
        {/* <div className="homepage__circle10"></div> */}
        <HPBubbles />
        <Footer />
      </section>
    </>
  );
}

export default HomePage;
