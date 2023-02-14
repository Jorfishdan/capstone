import "./MusicCircle.scss";
import dancingNote from "../../assets/images/dancingnotes.gif";
import note from "../../assets/images/note.gif";
function MusicCircle() {
  return (
    <>
      <section className="musiccircle">
        <div className="musiccircle__circle1">
          <img
            src={dancingNote}
            alt="dancing cartoon notes gif"
            className="musiccircle__dancing-note"
          ></img>
        </div>
        <div className="musiccircle__circle2"></div>
        <div className="musiccircle__circle3"></div>
        <div className="musiccircle__circle4"></div>
        <div className="musiccircle__circle5"></div>
        <div className="musiccircle__circle6"></div>
        <div className="musiccircle__circle7">
          <img src={note} alt="music note gif" className="musiccircle__note" />
        </div>
        <div className="musiccircle__circle8"></div>
        <div className="musiccircle__circle9"></div>
        <div className="musiccircle__circle10"></div>
        <div className="musiccircle__circle11"></div>
        <div className="musiccircle__circle12"></div>
        <div className="musiccircle__circle13"></div>
        <div className="musiccircle__circle14"></div>
        <div className="musiccircle__circle15"></div>

      </section>
    </>
  );
}
export default MusicCircle;
