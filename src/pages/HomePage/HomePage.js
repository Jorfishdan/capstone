import "./HomePage.scss"
import logo from "../../assets/images/teachers-pet.png";
import spinCat from "../../assets/images/spinning-cat.gif";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePageCards from "../../components/Card/HomePageCards/HomePageCards";

function HomePage() {
    return (
        <>
        <Header />
        <img src={logo} alt="logo of cat" />
        <HomePageCards />
        <Footer />
        </>
    )
}

export default HomePage;