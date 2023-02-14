import "./Timer.scss";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import CleaningModal from "../CleaningModal/CleaningModal";
import { useState } from "react";

function Timer({ setPage }) {
  const [openModal, setOpenModal] = useState(false);
  const [input, setInput] = useState(0);
  const [start, setStart] = useState(false);
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      handleReset();
      return <div className="timer__tagline">Beat the clock</div>;
    }
    const remainingMinutes = Math.ceil(remainingTime / 60);

    return (
      <>
        <div className="timer">
          <div className="timer__clock-wrapper">
            <div className="timer__remaining">Remaining</div>
            <div className="timer__value">{remainingMinutes}</div>
            <div className="timer__text">minutes</div>
          </div>
        </div>
      </>
    );
  };

  function handleReset() {
    setInput(0);
  }

  function handleStart() {
    setStart(true);
  }

  function handlePause() {
    setStart(false);
  }

  function handleChange(event) {
    event.preventDefault();
    if (!start) setInput(event.target.value * 60);
  }
  function startScan() {
    setOpenModal(true);
  }

  return (
    <div className="timer">
      <div className="timer__circleA"></div>
      <div className="timer__circleB"></div>
      <div className="timer__circleC"></div>
      <div className="timer__circleD"></div>
      <div className="timer__circleE"></div>

      <div className="timer__wrapper">
        <CountdownCircleTimer
          isPlaying={start}
          duration={input}
          colors={[
            "#FA7035",
            "#23F3DA",
            "#36F460",
            "#A335FA",
            "#35FA78",
            "#FA7035",
          ]}
          colorsTime={[5, 10, 9, 8, 5, 2]}
          onComplete={() => ({ shouldRepeat: false, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>

        <form className="timer__form">
          <input
            className="timer__input"
            type="number"
            step="1"
            onChange={handleChange}
          />
          <span className="timer__minutes">minutes</span>
        </form>
        <div className="timer__btn-wrapper">
          <button className="timer__start" onClick={handleStart}>
            Start
          </button>
          <button className="timer__pause" onClick={handlePause}>
            Pause
          </button>
          <button className="timer__reset" onClick={handleReset}>
            Reset
          </button>
          <button onClick={() => startScan()} className="timer__scan">
            Scan
          </button>
          <CleaningModal
            openModal={openModal}
            onClose={() => setOpenModal(false)}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Timer;

