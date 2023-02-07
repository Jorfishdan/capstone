import "./CleaningModal.scss";
import closeBtn from "../../assets/images/close.png";
import spin from "../../assets/images/spinning-cat.gif";
import { useState } from "react";
// import {AES, enc} from "crypto-js"

function CleaningModal({ openModal, onClose, setWarehouse }) {
  const [revealScore, setRevealScore] = useState(false)
  // const [encryted, setEncrypted] = useState("");
  // const [decrypt, setDecrypt] = useState("");
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
            <textarea className="modal__input" style={{display: revealScore ? "block" : "none"}}>
              <input type="text" placeholder="Let me calculate">
              </input>
            </textarea>
            <button className="modal__score" onClick={() => setRevealScore(true)}>Show Score!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CleaningModal;
