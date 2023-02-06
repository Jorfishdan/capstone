import "./CleaningPage.scss";
import Timer from "../../components/Timer/Timer";
import Music from "../../components/Music/Music";
import { useState } from "react";

function CleaningPage() {
    // const [openModal, setOpenModal] = useState(false);
    const [page, setPage] = useState(null)
return (
    <>
    <Timer setPage={setPage}/>
    <Music />
    </>
)
}

export default CleaningPage;
