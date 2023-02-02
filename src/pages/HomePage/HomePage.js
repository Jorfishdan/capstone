import "./HomePage.scss"
import logo from "../../assets/images/teachers-pet.png";
import spinCat from "../../assets/images/spinning-cat.gif";
function HomePage() {
    return (
        <>
        <div className="homepage"> This is a test
        <img src={logo} alt="logo of cat" />
        <img src={spinCat} alt="spinning cat gif" />
        </div>
        </>
    )
}

export default HomePage;