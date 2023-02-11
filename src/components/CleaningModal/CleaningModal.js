import "./CleaningModal.scss";
import closeBtn from "../../assets/images/close.png";
import sniffing from "../../assets/images/sniffing.gif";
import { useState } from "react";
import chat from "../../assets/images/chat.png";

function CleaningModal({ openModal, onClose}) {
  const [isShown, setIsShown] = useState(false);
  if (!openModal) return null;

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
          <img className="modal__gif" src={sniffing} />
          <img src={chat} alt="speech bubble" className="modal__chatBubble" />
          </div>
          <div className="modal__buttons">
            {/* <button onClick={onClose} className="modal__buttons-cancel">
              Cancel
            </button> */}
            <form className="modal__form" onSubmit={(e) => e.preventDefault()}>
              <input type={isShown ? "text" : "password"} placeholder="Let me scan the room.." className="modal__input-text"></input>
              <input id="checkbox" type="checkbox" checked={isShown} onChange={revealPassword} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CleaningModal;


