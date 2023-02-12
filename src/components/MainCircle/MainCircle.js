import "./MainCircle.scss";
import dogPic from "../../assets/images/boxer2.png";
import dogGif from "../../assets/images/boxer.gif";
import mojo from "../../assets/images/mojo.png";
import { useState } from "react";
function MainCircle() {
    // const [isAnimated, setIsAnimated] = useState(false);
  return (
    <>
      <div className="maincircle">
        <div className="maincircle__wrapper">
        <div className="maincircle__block"></div>
        <div className="maincircle__profile">
        {/* // onMouseEnter={() => setIsAnimated(true)}
        // onMouseLeave={() => setIsAnimated(false)}> */}
            <img className="maincircle__gif-dog" alt="turquoise and white dog logo" src={dogGif} />
            {/* <img className="maincircle__mojo" alt="mojo the virtual do says hi" src={mojo} /> */}
            {/* <p className="maincircle__dog-intro">Hi there! I'm your class pet Mojo. </p> */}
            {/* <img className={`maincircle__static-dog ${isAnimated ? "" : "maincircle__static-dog--visible"}`} alt="turquoise and white dog logo" src={dogPic} /> */}
            {/* <img className={`maincircle__gif-dog ${isAnimated ? "maincircle__gif-dog--visible" : ""}`} src={dogGif} alt="turquoise and white dog logo that's animated"/> */}
            </div>
        </div>
      </div>
    </>
  );
}

export default MainCircle;
