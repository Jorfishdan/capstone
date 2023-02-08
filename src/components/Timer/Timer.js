import "./Timer.scss"
import { useTimer } from "react-timer-hook";
import CleaningModal from "../CleaningModal/CleaningModal";
import { useState } from "react";

function Timer ({  setPage, setInputTime }) {
    
    const [openModal, setOpenModal] = useState(false);
    const [input, setInput] = useState(0);
    const expiryTimestamp = setInputTime();

    const { seconds, minutes, isRunning, start, pause, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("Time's up!"),
    });

    function startScan() {
        setOpenModal(true);
    }

    function handleChange(event) {
      event.preventDefault();
      setInput(event.target.value * 60)
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
            <input type="number" step="60" onChange={handleChange}/>
        </form>
        <button className="timer__start" onClick={start}>Start</button>
        <button className="timer__pause"onClick={pause}>Pause</button>
        <button className="timer__countdown"
          onClick={() => {
            const time = new Date();
            time.setMinutes(time.getMinutes()+ parseInt(input)/60);
            restart(time.getTime());
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


//////////////////////BACKUP VERSION--> THIS WORKS BUT CAN'T SET THE MINUTES/////////////////////////////////
// function Timer ({ expiryTimestamp, setPage, setInputTime }) {
    
//   const [openModal, setOpenModal] = useState(false);
// const [inputMinutes, setInputMinutes] = useState(0)
//   const { seconds, minutes, isRunning, start, pause, reset, restart } =
//   useTimer({
//     expiryTimestamp,
//     onExpire: () => console.warn("Time's up!"),
//   });

 
//   function startScan() {
//       setOpenModal(true);
//   }

// return (
//   <>
//     <div style={{ textAlign: "center" }}>
//       <h1 className="timer__title">Lightning Speed Clean</h1>
//       <p className="timer__cta">Can you beat the clock?</p>
//       <div style={{ fontSize: "100px" }}>
//         <span className="timer__minutes">{minutes}</span>:<span className="timer__seconds">{seconds}</span>
//       </div>
//       <p className="timer__running">{isRunning ? "Running" : "Not running"}</p>
//       <form className="timer__form">
//           <input type="number" />
//           <button className="timer__minutes">Set Timer</button>
//       </form>
//       <button className="timer__start" onClick={start}>Start</button>
//       <button className="timer__pause"onClick={pause}>Pause</button>
//       <button className="timer__countdown"
//         onClick={() => {
//           const time = new Date();
//           time.setSeconds(time.getSeconds()+ 300);
//           restart(time);
//         }}
//       >
//         Restart
//       </button>
//       <button onClick={() => startScan()} className="timer__scan">Scan</button>
//       </div>
//       <CleaningModal openModal={openModal} onClose={() => setOpenModal(false)} setPage={setPage} />
//   </>
// );
// }

// export default Timer;