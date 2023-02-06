import { useStopwatch } from "react-timer-hook";
import "./CleaningPage.scss"


function CleaningPage() {
    const {seconds, minutes, isRunning, start, pause,reset,} = useStopwatch({autoStart:true})
    return (
        <>
         <div style={{textAlign: 'center'}}>
      <h1>react-timer-hook</h1>
      <p>Stopwatch Demo</p>
      <div style={{fontSize: '100px'}}>
    <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
        </>
    )
}

export default CleaningPage;