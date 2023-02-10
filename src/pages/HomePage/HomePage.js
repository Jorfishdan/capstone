import "./HomePage.scss"
import logo from "../../assets/images/teachers-pet.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePageCards from "../../components/HomePageCards/HomePageCards";
import dog from "../../assets/images/dogMascot.gif";
import dog2 from "../../assets/images/dog2.png";

function HomePage() {
    return (
        <>
        <section className="homepage">
        <Header />
       
        <div className="homepage__circle"></div>
        
        <div className="homepage__circle2"></div>
        
        <HomePageCards />
        <div className="homepage__circle3"></div>
        <div className="homepage__circle4"></div>
        <div className="homepage__circle5"></div>
        <div className="homepage__circle6"></div>
        <div className="homepage__circle7"></div>
        {/* <Footer /> */}
        
        </section>        
        
        </>
    )
}

export default HomePage;