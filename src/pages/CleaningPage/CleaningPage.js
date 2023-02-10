import "./CleaningPage.scss";
import Timer from "../../components/Timer/Timer";
import Music from "../../components/Music/Music";
import { useState } from "react";
import house from "../../assets/images/house-static.png";
import { Link } from "react-router-dom";
import vet from "../../assets/images/veterinary.png";
import paw from "../../assets/images/pawprint.png";

function CleaningPage() {
    const [page, setPage] = useState(null)
    const [inputTime, setInputTime] = useState(0)

    const time = new Date ();
    // time.setSeconds(time.getSeconds() + setInputTime)

return (
    <>
    <div className="cleaningpage__header">
    <Link to="/"><img src={house} alt="home icon to press to return to the home page" className="cleaningpage__home" /></Link>
    <div className="cleaningpage__icon-wrapper">
    <Link to="/brainteaser"><img src={vet} alt="home icon to press to return to the home page" className="cleaningpage__brainteaser-link" /></Link>
    <Link to="/callbacks"><img src={paw} alt="home icon to press to return to the home page" className="cleaningpage__callbacks-link" /></Link>
    </div>
    </div>
    <Timer setPage={setPage} expiryTimestamp={time} setInputTime={setInputTime}/>
    {/* <Music /> */}
    </>
)
}

export default CleaningPage;

/////////////////Orginial clock set up//////////////
// import "./CleaningPage.scss";
// import Timer from "../../components/Timer/Timer";
// import Music from "../../components/Music/Music";
// import { useState } from "react";
// import pet from "../../assets/images/smiling-cat.png";
// import home from "../../assets/images/home.png";
// import { Link } from "react-router-dom";

// function CleaningPage() {
//     const [page, setPage] = useState(null)
//     const [inputTime, setInputTime] = useState(0)

//     const time = new Date ();

// return (
//     <>
//     <Link to="/"><img src={home} alt="home icon to press to return to the home page" className="cleaningpage__home" /></Link>
//     <Timer setPage={setPage} expiryTimestamp={time} setInputTime={setInputTime}/>
//     <Music />
//     <img src={pet} alt="cat cartoon" className="cleaningpage__cat"/>
//     </>
// )
// }

// export default CleaningPage;

