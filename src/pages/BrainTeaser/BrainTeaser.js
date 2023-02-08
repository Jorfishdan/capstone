import "./BrainTeaser.scss"
import BrainTeaserCard from "../../components/BrainTeaserCard/BrainTeaserCard";
import home from "../../assets/images/home.png";
import SubmitFact from "../../components/SubmitFact/SubmitFact";
import { Link } from "react-router-dom";

function BrainTeaser() {
    
    return(
        <>
        <Link to="/"><img src={home} alt="home icon to return to main menu" className="brainteaser__home" /></Link>
        <BrainTeaserCard />
        <SubmitFact />
        </>
    )
}

export default BrainTeaser;