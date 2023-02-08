import "./Timer.scss"
import { useTimer } from "react-timer-hook";
import CleaningModal from "../CleaningModal/CleaningModal";
import { useState } from "react";

function Timer ({ expiryTimestamp, setPage }) {
    
    const [openModal, setOpenModal] = useState(false);
    const [inputTime, setInputTime] = useState("");
    // const [seconds1, setSeconds1] = useSate(0);
    // const [minutes1, setMinutes1] = useState(0);

    // setSeconds1(Math.floor((time/1000)%60));
    // setMinutes1(Math.floor((time/1000/60) %60))
    const { seconds, minutes, isRunning, start, pause, reset, restart } =
    useTimer({
      expiryTimestamp,
      inputTime,
      onExpire: () => console.warn("Time's up!"),
    });

   
    function startScan() {
        setOpenModal(true);
    }

    function minutesClock(event) {
      setInputTime(event.target.value);
    }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 className="timer__title">Lightning Speed Clean</h1>
        <p className="timer__cta">Can you beat the clock?</p>
        <div style={{ fontSize: "100px" }}>
          <span className="timer__minutes">{minutes}</span>:<span className="timer__seconds">{seconds}</span>
        </div>
        <p className="timer__running">{isRunning ? "Running" : "Not running"}</p>
        <form className="timer__form">
            <input type="number" />
            <button onClick={minutesClock}className="timer__minutes">Set Timer</button>
        </form>
        <button className="timer__start" onClick={start}>Start</button>
        <button className="timer__pause"onClick={pause}>Pause</button>
        {/* <button className="timer__reset"onClick={reset}>Reset</button> */}
        <button className="timer__countdown"
          onClick={() => {
            const time = new Date();
            // time.setSeconds(time.getSeconds() + 300);
            // time.setMinutes(time.getMinutes() + inputTime);
            time.setSeconds(time.getSeconds() + 300);
            restart(time);
          }}
        >
          Restart
        </button>
        <button onClick={() => startScan()} className="timer__scan">Scan</button>
        </div>
        <CleaningModal openModal={openModal} onClose={() => setOpenModal(false)} setPage={setPage} />
    </>
  );
}

export default Timer;