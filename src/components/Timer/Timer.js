import "./Timer.scss";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import CleaningModal from "../CleaningModal/CleaningModal";
import { useEffect, useState } from "react";
import TimerCircle from "../TimerCircle/TimerCircle";
import TimerModal from "../TimerModal/TimerModal";

function Timer({ setPage }) {
  const [openModal, setOpenModal] = useState(false);
  const [openModalClock, setOpenModalClock] = useState(false);
  const [key, setKey] = useState(0);
  const [input, setInput] = useState(0);
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [remainingMinutes, setRemainingMinutes] = useState(0);

  useEffect(()=> {
    const intervalId = setInterval(() => {
      setTime((prevTime) => prevTime -1);
    }, 1000);

    return () => clearInterval(intervalId)
  }, [time])

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
    setTime(input)
    setStart(false)
}

  function handleStart() {
    setKey(prevKey => prevKey + 1)
    setStart(true);
  }

  function handlePause() {
    setStart(false);
  }

  function handleChange(event) {
    event.preventDefault();
    const newInput = event.target.value * 60;
    setInput(newInput)
    setTime(newInput)
    setRemainingMinutes(Math.ceil(newInput/60))
    setKey(prevKey => prevKey +1)
  }

  function startScan() {
    setOpenModal(true);
  }

  function openClock() {
    setOpenModalClock(true);
  }
  return (
    <div className="timer">
      <TimerCircle/>
      <div className="timer__wrapper">
        <CountdownCircleTimer
          key={key}
          isPlaying={time > 0}
          duration={input}
          // colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          colors={[
            "#FA7035",
            "#23F3DA",
            "#36F460",
            "#A335FA",
            "#35FA78",
            "#FA7035",
          ]}
          colorTime={[5, 10, 9, 8, 5, 2]}
          onComplete={() => [true, 1000]}
          // onComplete={() => ({ shouldRepeat: true, delay: 1 })}
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
          <button onClick={() => openClock()} className="timer__scan">
            Clock
          </button>
          <TimerModal   openModalClock={openModalClock}
           onClose={() => setOpenModalClock(false)}
            setPage={setPage} />
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

