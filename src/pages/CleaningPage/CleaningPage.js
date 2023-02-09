import "./CleaningPage.scss";
import Timer from "../../components/Timer/Timer";
import Music from "../../components/Music/Music";
import { useState } from "react";
import pet from "../../assets/images/smiling-cat.png";
import home from "../../assets/images/home.png";
import { Link } from "react-router-dom";

function CleaningPage() {
    const [page, setPage] = useState(null)
    const [inputTime, setInputTime] = useState(0)

    const time = new Date ();
    // time.setSeconds(time.getSeconds() + setInputTime)

return (
    <>
    <Link to="/"><img src={home} alt="home icon to press to return to the home page" className="cleaningpage__home" /></Link>
    <Timer setPage={setPage} expiryTimestamp={time} setInputTime={setInputTime}/>
    <Music />
    <img src={pet} alt="cat cartoon" className="cleaningpage__cat"/>
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

