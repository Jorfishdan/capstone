import './CleaningPageHeader.scss';
import house from "../../assets/images/house-static.png";
import vet from "../../assets/images/veterinary.png";
import paw from "../../assets/images/pawprint.png";
import { Link } from 'react-router-dom';
function CleaningPageHeader () {
    return(<>
     <div className="cleaningPageHeader__header">
    <Link to="/"><img src={house} alt="home icon to press to return to the home page" className="cleaningPageHeader__home" /></Link>
    <Link to="/"><p className="cleaningPageHeader__title">Teacher's Pet</p></Link>
      <div className="cleaningPageHeader__icon-wrapper">
    <Link to="/brainteaser"><img src={vet} alt="home icon to press to return to the home page" className="cleaningPageHeader__brainteaser-link" /></Link>
    <Link to="/callbacks"><img src={paw} alt="home icon to press to return to the home page" className="cleaningPageHeader__callbacks-link" /></Link>

    </div>
    </div>
    </>)
}

export default CleaningPageHeader;