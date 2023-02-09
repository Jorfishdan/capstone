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
            <motion.div className="text"  whileHover={{ scale: 1.1}} transition={{type: "spring", stiffness: 200, damping:15}} > 
            <img src={house} alt="home icon to return to main menu" className="brainteaser__home" />
            </motion.div>
            </Link>
        <BrainTeaserCard />
        <SubmitFact />
    
        </>

    )
}

export default BrainTeaser;