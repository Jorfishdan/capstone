import "./Timer.scss"
import { useTimer } from "react-timer-hook";
import CleaningModal from "../CleaningModal/CleaningModal";
import { useState } from "react";

function Timer ({ expiryTimestamp, setPage }) {
    
    const [openModal, setOpenModal] = useState(false);
    const { seconds, minutes, isRunning, start, pause, reset, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
    });
   
    function startScan() {
        setOpenModal(true);
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
        <button className="timer__start" onClick={start}>Start</button>
        <button className="timer__pause"onClick={pause}>Pause</button>
        <button className="timer__reset"onClick={reset}>Reset</button>
        <button className="timer__countdown"
          onClick={() => {
            const time = new Date();
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