import "./Timer.scss"
import { useTimer } from "react-timer-hook";
function Timer ({ expiryTimestamp }) {
    const { seconds, minutes, isRunning, start, pause, reset, restart } =
    useTimer({
      expiryTimestamp,
      onExpire: () => console.warn("onExpire called"),
    });

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Lightning Speed Clean</h1>
        <p>Can you beat the clock?</p>
        <div style={{ fontSize: "100px" }}>
          <span>{minutes}</span>:<span>{seconds}</span>
        </div>
        <p>{isRunning ? "Running" : "Not running"}</p>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
        <button
          onClick={() => {
            const time = new Date();
            time.setSeconds(time.getSeconds() + 300);
            restart(time);
          }}
        >
          Restart
        </button>
        </div>
    </>
  );
}

export default Timer;