import "./HomePage.scss"
import logo from "../../assets/images/teachers-pet.png";
import spinCat from "../../assets/images/spinning-cat.gif";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
function HomePage() {
    return (
        <>
        <Header />
        <div className="homepage"> This is a test
        <img src={logo} alt="logo of cat" />
        </div>
        <Footer />
        </>
    )
}

export default HomePage;