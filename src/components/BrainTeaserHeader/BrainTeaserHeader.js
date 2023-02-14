import { Link } from "react-router-dom";
import "./BrainTeaserHeader.scss";
import house from "../../assets/images/house-static.png";
import dogfood from "../../assets/images/dog-food.png";
import paw from "../../assets/images/pawprint.png";

function BrainTeaserHeader() {
    return(<>
            <section className="brainteaserheader__header">
          <Link to="/">
            <img
              src={house}
              alt="home icon to return to main menu"
              className="brainteaserheader__home"
            />
          </Link>
          <p className="brainteaserheader__title">Teacher's Pet</p>

          <div className="brainteaserheader__icon-wrapper">
            <Link to="/cleanup">
              <img
                src={dogfood}
                alt="home icon to return to main menu"
                className="brainteaserheader__cleanup-link"
              />
            </Link>
            <Link to="/callbacks">
              <img
                src={paw}
                alt="home icon to return to main menu"
                className="brainteaserheader__callbacks-link"
              />
            </Link>
          </div>
        </section>
    </>)
}
export default BrainTeaserHeader;