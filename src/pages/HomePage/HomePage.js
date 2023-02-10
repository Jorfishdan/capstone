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
            <h1 className="homepage__title">Teacher's Pet</h1>
       
        <div className="homepage__circle"></div>
        
        <div className="homepage__circle2"></div>
        <HomePageCards />
        <div className="homepage__circle3"></div>
        {/* <Footer /> */}
        
        </section>        
        
        </>
    )
}

export default HomePage;