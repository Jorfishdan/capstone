import "./CleaningPage.scss";
import Timer from "../../components/Timer/Timer";
import Music from "../../components/Music/Music";
import { useState } from "react";
import HPBubbles from "../../components/HPBubbles/HPBubbles";
import CleaningPageHeader from "../../components/CleaningPageHeader/CleaningPageHeader";
import Footer from "../../components/Footer/Footer";
function CleaningPage() {
    const [page, setPage] = useState(null)
    const [inputTime, setInputTime] = useState(0)
    const [showMusic, setShowMusic] = useState(true)

    const time = new Date ();

return (
    <>
    <CleaningPageHeader />
    <HPBubbles />
    <Timer setPage={setPage} setShowMusic={setShowMusic} expiryTimestamp={time} setInputTime={setInputTime}/>
    {showMusic && <Music setShowMusic={setShowMusic}/>}
    <Footer />

    </>
)
}

export default CleaningPage;


