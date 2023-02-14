import "./CleaningPage.scss";
import Timer from "../../components/Timer/Timer";
import Music from "../../components/Music/Music";
import { useState } from "react";
import HPBubbles from "../../components/HPBubbles/HPBubbles";
import CleaningPageHeader from "../../components/CleaningPageHeader/CleaningPageHeader";
function CleaningPage() {
    const [page, setPage] = useState(null)
    const [inputTime, setInputTime] = useState(0)

    const time = new Date ();

return (
    <>
    <CleaningPageHeader />
    <HPBubbles />
    <Timer setPage={setPage} expiryTimestamp={time} setInputTime={setInputTime}/>
    <Music />

    </>
)
}

export default CleaningPage;


