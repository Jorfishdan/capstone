import "./Timer.scss"
import {  CountdownCircleTimer } from "react-countdown-circle-timer";
import CleaningModal from "../CleaningModal/CleaningModal";
import { useState } from "react";

function Timer ({  setPage, inputTime }) {

  
    const [openModal, setOpenModal] = useState(false);
    const [input, setInput] = useState(0);
    const [start, setStart] = useState(false);
    const renderTime = ({ remainingTime }) => {
      if (remainingTime <= 0) {
        return <div className="timer">Time to play</div>;
       
      }
      const remainingMinutes = Math.ceil(remainingTime / 60);
      
      return (
        <>

        <div className="timer">
          <div className="text">Remaining</div>
          <div className="value">{remainingMinutes}</div>
          <div className="text">minutes</div>
        </div>
        <CleaningModal openModal={openModal} onClose={() => setOpenModal(false)} setPage={setPage} />
        </>
      );

    }

    function handleReset() {
      setInput(0)
    }

    function handleStart(){
      setStart(true)

    }

    function handlePause(){
      setStart(false)

    }
    function handleChange(event) {
            event.preventDefault();
            setInput(event.target.value * 60)

          }
        function startScan() {
                    setOpenModal(true);
                }

      return (
        <div className="timer">
        
        <div className="timer-wrapper">
          <CountdownCircleTimer
            isPlaying={start}
            duration={input}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: false, delay: 1 })}
          >
            {renderTime}
          </CountdownCircleTimer>
        </div>
        
        <form className="timer__form">
            <input type="number" step="1" onChange={handleChange}/>
            <span>minutes</span>
       </form>

       <button className="timer__start" onClick={handleStart}>Start</button>
        <button className="timer__pause"onClick={handlePause}>Pause</button>
        <button className="timer__pause"onClick={handleReset}>Reset</button>
        <button onClick={() => startScan()} className="timer__scan">Scan</button>
        <CleaningModal openModal={openModal} onClose={() => setOpenModal(false)} setPage={setPage} />
      </div>
      )
    };
    
   
  export default Timer;

  // return (
  //   <>
  //     <div style={{ textAlign: "center" }}>
  //       <h1 className="timer__title">Lightning Speed Clean</h1>
  //       <p className="timer__cta">Can you beat the clock?</p>
  //       <div className="timer">
  //         <div className="text">Remaining</div>
  //         <div className="value">{remainingTime}</div>
  //         <div className="text">seconds</div>
  //       </div>
  //       </div>
  //       <CleaningModal openModal={openModal} onClose={() => setOpenModal(false)} setPage={setPage} />
  //   </>
  // );
// }

// export default Timer;


////////////////////ORIGINAL TIMER -IT WORKS!//////////////////////////////////////
// import "./Timer.scss"
// import { useTimer } from "react-timer-hook";
// import CleaningModal from "../CleaningModal/CleaningModal";
// import { useState } from "react";

// function Timer ({  setPage, setInputTime }) {
    
//     const [openModal, setOpenModal] = useState(false);
//     const [input, setInput] = useState(0);
//     const expiryTimestamp = setInputTime();

//     const { seconds, minutes, isRunning, start, pause, restart } =
//     useTimer({
//       expiryTimestamp,
//       onExpire: () => console.warn("Time's up!"),
//     });

//     function startScan() {
//         setOpenModal(true);
//     }

//     function handleChange(event) {
//       event.preventDefault();
//       setInput(event.target.value * 60)
//     }

//   return (
//     <>
//       <div style={{ textAlign: "center" }}>
//         <h1 className="timer__title">Lightning Speed Clean</h1>
//         <p className="timer__cta">Can you beat the clock?</p>
//         <div style={{ fontSize: "100px" }}>
//           <span className="timer__minutes">{minutes}</span>:<span className="timer__seconds">{seconds}</span>
//         </div>
//         <p className="timer__running">{isRunning ? "Running" : "Not running"}</p>
//         <form className="timer__form">
//             <input type="number" step="60" onChange={handleChange}/>
//         </form>
//         <button className="timer__start" onClick={start}>Start</button>
//         <button className="timer__pause"onClick={pause}>Pause</button>
//         <button className="timer__countdown"
//           onClick={() => {
//             const time = new Date();
//             time.setMinutes(time.getMinutes()+ parseInt(input)/60);
//             restart(time.getTime());
//           }}
//         >
//           Restart
//         </button>
//         <button onClick={() => startScan()} className="timer__scan">Scan</button>
//         </div>
//         <CleaningModal openModal={openModal} onClose={() => setOpenModal(false)} setPage={setPage} />
//     </>
//   );
// }

// export default Timer;


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