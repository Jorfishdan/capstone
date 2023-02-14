import './BrainTeaserInstructions.scss';
function BrainTeaserInstructions() {
    return (<>
     <section className="instructions">
         <div className="instructions__instructions-wrapper">
          <h3 className="instructions__instructions">
            Vote for the correct answer! Either raise your hand or vote by
            standing on designated sides of the room
          </h3>
          <p className="instructions__hint">
            Psssst...explain <i>why</i> you picked your answer before the grand
            reveal
          </p>
        </div>
        </section>
    </>)
}
export default BrainTeaserInstructions;