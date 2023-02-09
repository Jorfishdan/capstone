import "./HomePage.scss"
import logo from "../../assets/images/teachers-pet.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePageCards from "../../components/HomePageCards/HomePageCards";
import dog from "../../assets/images/dogMascot.gif";

function HomePage() {
    return (
        <>
        <section className="homepage">
        <Header />
        <HomePageCards />
        <Footer />
        </section>        
        <img className="homepage__dog" src={dog} alt="dog" />
        </>
    )
}

export default HomePage;