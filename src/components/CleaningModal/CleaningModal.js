import "./CleaningModal.scss";
import closeBtn from "../../assets/images/close.png";
import spin from "../../assets/images/spinning-cat.gif";
import { useState } from "react";

function CleaningModal({ openModal, onClose}) {
  const [isShown, setIsShown] = useState(false);
  if (!openModal) return null;

function revealPassword() {
  setIsShown((isShown) => !isShown);

} 
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
            <form className="modal__form" onSubmit={(e) => e.preventDefault()}>
              <input type={isShown ? "text" : "password"} placeholder="type here" className="modal__input-text"></input>
              <input id="checkbox" type="checkbox" checked={isShown} onChange={revealPassword} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CleaningModal;

// style={{display: revealScore ? "block" : "none"}

// onClick={() => setRevealScore(true)

// {isShown ? "text" : "password"} onChange={revealPassword}

// onClick={()=> setIsShown(true)} 
