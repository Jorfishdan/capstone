import close from "../../assets/images/close.png";
import { useState } from "react";
import ("./TimerModal.scss");


function TimerModal({openModalClock, onClose }) {
    const [isShown, setIsShown] = useState(false);
    if (!openModalClock) return null;

    return (<>
    <section className="clock">
   <div className="clock__overlay">
      <div className="clock__modal">
        <div onClick={onClose} className="modal__closeButton">
          <img className="clock__closeX" src={close} alt="exit button" />
        </div>
        <div className="clock__content">
          
          </div>
        </div>
      </div>
      </section>

    </>)
}

export default TimerModal;