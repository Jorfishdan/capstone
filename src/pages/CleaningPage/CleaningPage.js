import "./CleaningPage.scss";
import Timer from "../../components/Timer/Timer";
import Music from "../../components/Music/Music";
import { useState } from "react";
import pet from "../../assets/images/smiling-cat.png";

function CleaningPage() {
    // const [openModal, setOpenModal] = useState(false);
    const [page, setPage] = useState(null)
return (
    <>
    <Timer setPage={setPage}/>
    <Music />
    <img src={pet} alt="cat cartoon" className="cleaningpage__cat"/>

    </>
)
}

export default CleaningPage;
