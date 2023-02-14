import "./CleaningModal.scss";
import closeBtn from "../../assets/images/close.png";
import sniffing from "../../assets/images/sniffing.gif";
import { useEffect, useState } from "react";
import chat from "../../assets/images/chat.png";
import axios from "axios";

function CleaningModal({ openModal, onClose }) {
  const [isShown, setIsShown] = useState(false);
  const [scanSays, setScanSays] = useState({});
  if (!openModal) return null;


  // useEffect(() => {
  //   if(openModal) {
  //   const scanResults = async () => {
  //     try {
  //       const response = await axios.get(
  //         ` http://localhost:8080/scan`
  //       );
  //       console.log(response)
  //       setScanSays(response.data)

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   scanResults();
  // }
  // }, [openModal]);

console.log(scanSays)
  function revealPassword() {
    setIsShown((isShown) => !isShown);
  }

  if(!openModal) {
    return null;
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
            <span className="modal__bubble-text"> 
            Hmm...let's see how you did...
              {/* {openModal && {scanSays}} */}
            </span>
          </div>
          <div className="modal__buttons">
            <form className="modal__form" onSubmit={(e) => e.preventDefault()}>
              <input
                type={isShown ? "text" : "password"}
                placeholder="Your points total is..."
                className="modal__input-text"
              ></input>
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
export default CleaningModal;
