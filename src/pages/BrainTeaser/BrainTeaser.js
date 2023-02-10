import "./BrainTeaser.scss"
import BrainTeaserCard from "../../components/BrainTeaserCard/BrainTeaserCard";
import home from "../../assets/images/home.png";
import house from "../../assets/images/house-static.png";
import SubmitFact from "../../components/SubmitFact/SubmitFact";
import dogfood from "../../assets/images/dog-food.png";
import paw from "../../assets/images/pawprint.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BrainTeaser() {
    
    return(
        <>
        <section className="brainteaser">
            <div className="brainteaser__header">
        <Link to="/">
            <img src={house} alt="home icon to return to main menu" className="brainteaser__home" />
            </Link>
            <div className="brainteaser__icon-wrapper">
            <Link to="/cleanup">
            <img src={dogfood} alt="home icon to return to main menu" className="brainteaser__cleanup-link" />
            </Link>
            <Link to="/callbacks">
            <img src={paw} alt="home icon to return to main menu" className="brainteaser__callbacks-link" />
            </Link>
            </div>
            </div>
            <div className="brainteaser__cardA"></div>
            <div className="brainteaser__cardB"></div>
            <div className="brainteaser__cardC"></div>
            <div className="brainteaser__cardD"></div>
            <div className="brainteaser__cardE"></div>
            <div className="brainteaser__cardF"></div>
            <div className="brainteaser__cardG"></div>
            <div className="brainteaser__wrapper">
        <BrainTeaserCard />
        <SubmitFact />
        </div>
        </section>
        </>

    )
}

export default BrainTeaser;