import "./MathSelectModal.scss";
import closeBtn from "../../assets/images/close.png";
import dog from "../../assets/images/golden-retriever.gif";
import { useState } from "react";
import chat from "../../assets/images/chat.png";

function MathSelectModal({ onClose, finalScore, setFinalScore, setShowModal }) {

function handleClose() {
  setFinalScore(0)
  onClose()
}

  return (
    <div className="overlay">
      <div className="modal">
        <div onClick={onClose} className="modal__closeButton">
          <img className="modal__closeX" src={closeBtn} alt="exit button" onClick={handleClose}/>
        </div>
        <div className="modal__content">
          <div className="modal__dog-wrapper">
            <img className="modal__gif" src={dog} />
            <img src={chat} alt="speech bubble" className="modal__chatBubble" />
            <span className="modal__bubble-text"> 
           Nicely done! Your score: {finalScore}
            </span>
          </div>
          <div className="modal__buttons">
          </div>
        </div>
      </div>
    </div>
  );
}
export default MathSelectModal;
