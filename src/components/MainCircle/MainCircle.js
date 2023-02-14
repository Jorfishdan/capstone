import "./MainCircle.scss";
import HomepageSlogan from "../HomepageSlogan/HomepageSlogan";
import dogGif from "../../assets/images/boxer.gif";
import mojo from "../../assets/images/lowerMojo.png";
import HomePageCards from "../HomePageCards/HomePageCards";
function MainCircle() {
  return (
    <>
      <div className="maincircle">
        <div className="maincircle__wrapper">
          <div className="maincircle__block">
            <HomepageSlogan />
            <HomePageCards />
          </div>
          <div className="maincircle__profile">
            <div className="maincircle__mojo-wrapper">
              <img
                className="maincircle__gif-dog"
                alt="turquoise and white dog logo"
                src={dogGif}
              />
            </div>
            <img
              className="maincircle__mojo"
              alt="mojo the virtual do says hi"
              src={mojo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainCircle;
