import { useEffect, useRef, useState } from 'react';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './NewClock.scss'
import TimerCircle from "../TimerCircle/TimerCircle";
import AnimalNoiseCircle from '../AnimalNoiseCircle/AnimalNoiseCircle';
function NewClock() {
    // const [openModal, setOpenModal] = useState(false);
    const [key, setKey] = useState(0);
    const [input, setInput] = useState(0);
    const [time, setTime] = useState(0);
    const [start, setStart] = useState(false);
    const [remainingMinutes, setRemainingMinutes] = useState(0);
    const [remainingTime, setRemainingTime] = useState(input);
    const inputRef = useRef(null)
  
    useEffect(()=> {
      let intervalId = null;
      if(start && time > 0){
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime -1);
      }, 1000);
    }
    if (time === 0) {
      setStart(false)
    }
    setRemainingTime(time)
      return () => clearInterval(intervalId)
    }, [start, time])
  
    const renderTime = ({ remainingTime }) => {
      if (remainingTime === 0) {
        handleReset();
        return <div className="clock__tagline">Beat the clock</div>;
      } else {
       const remainingMinutes = Math.ceil(remainingTime/60)
      return (
        <>
          <div className="clock__head">
            <div className="clock__clock-wrapper">
              <div className="clock__remaining">Remaining</div>
              <div className="clock__value">{remainingMinutes > 0 ? remainingMinutes : 0}</div>
              <div className="clock__text">minutes</div>
            </div>
          </div>
          
        </>
      );
    };}
  
    function handleReset() {
      setInput(0)
      setTime(0)
      setStart(false)  
      if (inputRef.current) {
        inputRef.current.value = '';
      }
  
  }
  
    function handleStart() {
      setStart((prevStart) => !prevStart);
      console.log("click")
    }
  
    function handleChange(event) {
      event.preventDefault();
      const newInput = event.target.value * 60;
      setInput(newInput)
      setTime(newInput)
      setRemainingMinutes(Math.ceil(newInput/60))
      setKey(prevKey => prevKey +1)
    }
  
    return (
        
      <div className="clock">
        <div className="clock__background">
        
        <div className="clock__circle1"></div>
        <div className="clock__circle2"></div>
        <div className="clock__circle3"></div>
        <div className="clock__circle4"></div>
        <div className="clock__circle5"></div>
        <div className="clock__circle6"></div>
        <div className="clock__circle7"></div>
        <div className="clock__circle8"></div>
        <div className="clock__circle9"></div>
        <div className="clock__circle10"></div>
        <div className="clock__circle11"></div>
        <div className="clock__wrapper">
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
            colorsTime={[10,8, 7, 5, 2, 0]}
            onComplete={() => {
              handleReset();
            return [true, 1000]}}
          >
            {renderTime}
          </CountdownCircleTimer>
  
          <form className="clock__form">
            <input
              className="clock__input"
              type="number"
              step="1"
              onChange={handleChange}
              ref={inputRef}
              value={inputRef.current ? inputRef.current.value : ''}
              
            />
            <span className="clock__minutes">minutes</span>
          </form>
          <div className="clock__btn-wrapper">
          <button className="clock__start" onClick={handleStart}>
              {start ? "Pause" : "Start"}
            </button>
          </div>
        </div>
        </div>
       
      </div>
    );
  }
  



export default NewClock;