import "./BrainTeaser.scss"
import BrainTeaserCard from "../../components/BrainTeaserCard/BrainTeaserCard";
import home from "../../assets/images/home.png";
import house from "../../assets/images/house-static.png";
import SubmitFact from "../../components/SubmitFact/SubmitFact";
import dogfood from "../../assets/images/dog-food.png";
import paw from "../../assets/images/pawprint.png";
import Pet from "../../components/Pet/Pet";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HPBubbles from "../../components/HPBubbles/HPBubbles";
import { useState } from "react";

function BrainTeaser() {
    const [isSubmitShown, setIsSubmitShown] = useState(false)

    function handleAddFact() {
        setIsSubmitShown(prevValue => !prevValue)
        // console.log("clicked")
    }
    
    return(
        <>
        <section className="brainteaser">
            <div className="brainteaser__header">
        <Link to="/">
            <img src={house} alt="home icon to return to main menu" className="brainteaser__home" />
            </Link>
            <p className="brainteaser__title">Teacher's Pet</p>
            
            <div className="brainteaser__icon-wrapper">
              
            <Link to="/cleanup">
            <img src={dogfood} alt="home icon to return to main menu" className="brainteaser__cleanup-link" />
            </Link>
            <Link to="/callbacks">
            <img src={paw} alt="home icon to return to main menu" className="brainteaser__callbacks-link" />
            </Link>
            </div>
            </div>
            <div className="brainteaser__instructions-wrapper">
            <h3 className="brainteaser__instructions">Vote for the correct answer! Either raise your hand or vote by standing on designated sides of the room </h3>
            <p className="brainteaser__hint">Psssst...explain <i>why</i> you picked your answer before the grand reveal</p>
            </div>
            <div className="brainteaser__cardA">
            </div>
            {/* <div className="brainteaser__cardB">
            </div> */}
            {/* <div className="brainteaser__cardC"></div> */}
            
            <div className="brainteaser__cardD" onClick={handleAddFact}>
            <p className="brainteaser__addFact">Add a fact here!</p>
            </div>
            <div className="brainteaser__cardE"></div>
            {/* <div className="brainteaser__cardF"></div> */}
            <div className="brainteaser__cardG"></div>
            {/* <div className="brainteaser__cardH"></div> */}
            <div className="brainteaser__wrapper">
                <div className="brainteaser__comp-wrapper">
                
        <BrainTeaserCard />

        {isSubmitShown === true && <SubmitFact />}
        </div>
        <Pet />
        </div>
        {/* <HPBubbles /> */}
        </section>
        </>

    )
}

export default BrainTeaser;