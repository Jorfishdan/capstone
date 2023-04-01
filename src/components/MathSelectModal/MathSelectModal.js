import "./MathSelectModal.scss";
import closeBtn from "../../assets/images/close.png";
import dog from "../../assets/images/golden-retriever.gif";
import { useState } from "react";
import chat from "../../assets/images/chat.png";

function MathSelectModal({ onClose, score }) {
  const [isShown, setIsShown] = useState(false);
  // if (!openModal) return null;

  function revealPassword() {
    setIsShown((isShown) => !isShown);
  }



  return (
    <div className="overlay">
      <div className="modal">
        <div onClick={onClose} className="modal__closeButton">
          <img className="modal__closeX" src={closeBtn} alt="exit button" />
        </div>
        <div className="modal__content">
          <div className="modal__dog-wrapper">
            <img className="modal__gif" src={dog} />
            <img src={chat} alt="speech bubble" className="modal__chatBubble" />
            <span className="modal__bubble-text"> 
           Nicely done! Your score:
            </span>
            <p className="modal__score">{score}</p>
          </div>
          <div className="modal__buttons">
            <form className="modal__form" onSubmit={(e) => e.preventDefault()}>
              <input
                id="checkbox"
                type="checkbox"
                checked={isShown}
                onChange={revealPassword}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MathSelectModal;
