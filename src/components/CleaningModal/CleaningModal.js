import "./CleaningModal.scss";
import closeBtn from "../../assets/images/close.png"

function CleaningModal({
    openModal,
  onClose,
  setWarehouse,
}) {
  if (!openModal) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <p onClick={onClose} className="modal__closeButton">
          <img className="modal__closeX" src={closeBtn} alt="exit butt" />
        </p>
        <div className="modal__content">
          <p className="modal__content-description">
           Scanning the room
          </p>
          <div className="modal__buttons">
            <button onClick={onClose} className="modal__buttons-cancel">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CleaningModal;