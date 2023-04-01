import "./MathSelectTimer.scss";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import CleaningModal from "../CleaningModal/CleaningModal";
import { useEffect, useRef, useState } from "react";
import TimerCircle from "../TimerCircle/TimerCircle";
import MathSelect from "../MathSelect/MathSelect";

function MathSelectTimer({
  setPage,
  setShowMusic,
  selectedTime,
  setScore,
  onRemainingTimeChange,
}) {
  const [openModal, setOpenModal] = useState(false);
  const [key, setKey] = useState(0);
  const [input, setInput] = useState(0);
  const [time, setTime] = useState(0);
  const [start, setStart] = useState(false);
  const [remainingMinutes, setRemainingMinutes] = useState(0);
  const [remainingTime, setRemainingTime] = useState(selectedTime);
  const inputRef = useRef(null);



  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime -1);
      }
      onRemainingTimeChange(remainingTime - 1);
    }, 1000)
    return () => clearInterval(interval);
  }, [remainingTime])

  useEffect(() => {
    if (remainingTime === 0) {
      setScore(0);
    }
    onRemainingTimeChange(remainingTime);
  }, [remainingTime, setScore]);

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      handleReset();
      return <div className="timer__tagline">Beat the clock</div>;
    } else {
      const remainingMinutes = Math.ceil(remainingTime / 60);
      return (
        <>
          <div className="timer">
            <div className="timer__clock-wrapper">
              <div className="timer__remaining">Remaining</div>
              <div className="timer__value">
                {remainingMinutes > 0 ? remainingMinutes : 0}
              </div>
              <div className="timer__text">minutes</div>
            </div>
          </div>
        </>
      );
    }
  };

  function handleReset() {
    setInput(0);
    setTime(0);
    setStart(false);
    setRemainingTime(input)
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    setScore(0);
  }

  function handleStart() {
    setStart((prevStart) => !prevStart);
    console.log("click");
  }

  function handleChange(event) {
    event.preventDefault();
    const newInput = event.target.value * 60;
    setInput(newInput);
    setTime(newInput);
    setRemainingMinutes(Math.ceil(newInput / 60));
    setKey((prevKey) => prevKey + 1);
  }

  function handleClick() {
    setShowMusic((prevStart) => !prevStart);
  }

  return (
    <div className="timer">
      <TimerCircle />
      <div className="timer__wrapper">
        <CountdownCircleTimer
          setStart={true}
          key={key}
          isPlaying={time > 0 && start}
          duration={input}
          colors={[
            "#FA7035",
            "#23F3DA",
            "#36F460",
            "#A335FA",
            "#35FA78",
            "#FA7035",
          ]}
          colorsTime={[10, 8, 7, 5, 2, 0]}
          onComplete={() => {
            handleReset();
            return [true, 1000];
          }}
        >
          {renderTime}
        </CountdownCircleTimer>

        <form className="timer__form">
          <input
            className="timer__input"
            type="number"
            step="1"
            onChange={handleChange}
            ref={inputRef}
            value={inputRef.current ? inputRef.current.value : ""}
          />
          <span className="timer__minutes">minutes</span>
        </form>
        <div className="timer__btn-wrapper">
          <button className="timer__start" onClick={handleStart}>
            {start ? "Pause" : "Start"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MathSelectTimer;


////////////////option 2//////////////////
  // useEffect(() => {
  //   if (remainingTime === 0) {
  //     onRemainingTimeChange(remainingTime)
  //   }
  // }, [remainingTime]);

  // useEffect(() => {
  //  const intervalId = setInterval(() => {
  //   setRemainingTime((prevTime) => prevTime -1)
  //  }, 1000);
  //  return () => {
  //   clearInterval(intervalId)
  //  }
  // }, [])

  ///////////option 1 /////////

  // useEffect(() => {
  //   if (start) {
  //     const intervalId = setInterval(() => {
  //       setRemainingTime((prev) => prev - 1);
  //     }, 1000);

  //     return () => clearInterval(intervalId);
  //   }
  // }, [start, remainingTime, setScore]);