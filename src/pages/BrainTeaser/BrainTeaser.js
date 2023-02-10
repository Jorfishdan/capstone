import "./BrainTeaser.scss"
import BrainTeaserCard from "../../components/BrainTeaserCard/BrainTeaserCard";
import home from "../../assets/images/home.png";
import house from "../../assets/images/house-static.png";
import SubmitFact from "../../components/SubmitFact/SubmitFact";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"

function BrainTeaser() {
    
    return(
        <>
        <Link to="/">
            <motion.div className="text"  whileHover={{ scale: 1.1}} transition={{type: "bounce", stiffness: 100, damping:5}} > 
            <img src={house} alt="home icon to return to main menu" className="brainteaser__home" />
            </motion.div>
            </Link>
        <BrainTeaserCard />
        <SubmitFact />
    
        </>

    )
}

export default BrainTeaser;