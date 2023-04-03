import "./BrainTeaser.scss";
import BrainTeaserCard from "../../components/BrainTeaserCard/BrainTeaserCard";
import SubmitFact from "../../components/SubmitFact/SubmitFact";
import Pet from "../../components/Pet/Pet";
import HPBubbles from "../../components/HPBubbles/HPBubbles";
import { useState } from "react";
import BrainTeaserCircle from "../../components/BrainTeaserCircle/BrainTeaserCircle";
import BrainTeaserInstructions from "../../components/BrainTeaserInstructions/BrainTeaserInstructions";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";

function BrainTeaser() {
  const [isSubmitShown, setIsSubmitShown] = useState(false);

  function handleAddFact() {
    setIsSubmitShown((prevValue) => !prevValue);
  }

  return (
    <>
    <Menu />
      <section className="brainteaser">
        <BrainTeaserInstructions />
        <BrainTeaserCircle />
        <div className="brainteaser__cardD" onClick={handleAddFact}>
          <p className="brainteaser__addFact">Add a fact here!</p>
        </div>
        <div className="brainteaser__wrapper">
          <div className="brainteaser__comp-wrapper">
            <BrainTeaserCard />

            {isSubmitShown === true && <SubmitFact />}
          </div>
          <Pet />
        </div>
        <HPBubbles />
        <Footer />
        
      </section>
    </>
  );
}

export default BrainTeaser;
