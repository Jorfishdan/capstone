import './HomePageHeader.scss';
import info from "../../assets/images/info-static.png";
import clock from "../../assets/images/pocket-watch.png";
import { Link } from 'react-router-dom';
function HomePageHeader () {
    return (<>
     <section className="homePageHeader__info-wrapper">
     <Link to="/clock"><img src={clock} alt="clock icon to timer" className="homePageHeader__info" /></Link>
      <Link to="/mainInfo"><img src={info} alt="info icon to read game instructions" className="homePageHeader__info" /></Link>
      </section>

    </>)
}

export default HomePageHeader;