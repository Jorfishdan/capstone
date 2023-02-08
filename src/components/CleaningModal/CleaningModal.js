import "./CleaningModal.scss";
import closeBtn from "../../assets/images/close.png";
import spin from "../../assets/images/spinning-cat.gif";
import { useState } from "react";

function CleaningModal({ openModal, onClose, setWarehouse }) {
  const [revealScore, setRevealScore] = useState(false)
  if (!openModal) return null;


  return (
    <div className="overlay">
      <div className="modal">
        <p onClick={onClose} className="modal__closeButton">
          <img className="modal__closeX" src={closeBtn} alt="exit button" />
        </p>
        <div className="modal__content">
          <p className="modal__content-description">Scanning the room</p>
          <img className="modal__gif" src={spin} />
          <div className="modal__buttons">
            <button onClick={onClose} className="modal__buttons-cancel">
              Cancel
            </button>
            <textarea className="modal__input" >
              <input type="password" placeholder="Let me calculate">
              </input>
            </textarea>
            <button className="modal__score">Show Score!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CleaningModal;

// style={{display: revealScore ? "block" : "none"}

// onClick={() => setRevealScore(true)
