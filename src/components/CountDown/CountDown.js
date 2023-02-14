import "./CountDown.scss";
import staticCount from "../../assets/images/staticCountDown.png";
import gifCount from "../../assets/images/visualCountDown.gif";
import { useEffect, useState } from "react";
function CountDown() {
  const [countDown, setCountDown] = useState(false);

  useEffect(() => {
    if (countDown) {
      setTimeout(() => {
        setCountDown(false);
      }, 2000);
    }
  }, [countDown]);

  return (
    <>
      <div className="countdown">
        <div
          onClick={() => setCountDown(!countDown)}
          className="countdown__clock"
        >
          <img
            src={countDown ? gifCount : staticCount}
            alt={countDown ? "gif of countdown" : "static countdown"}
            className={countDown ? "countdown__gif" : "countdown__static"}
          />
        </div>
        <div className="countdown__instructions-wrapper">
          <p className="countdown__instructions">
            There are sneaky animals hiding behind each card, guess whose hiding
            where
          </p>
          <span className="countdown__bone">
            With each correct answer, you get another bone for Mojo
          </span>
          <p className="countdown__rule">
            Listen carefully as the animals grow quieter and quieter
          </p>
        </div>
      </div>
    </>
  );
}

export default CountDown;
