import "./HomePage.scss"
import logo from "../../assets/images/teachers-pet.png";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePageCards from "../../components/HomePageCards/HomePageCards";

function HomePage() {
    return (
        <>
        <section className="homepage">
        <Header />
        <HomePageCards />
        <Footer />
        </section>
        </>
    )
}

export default HomePage;