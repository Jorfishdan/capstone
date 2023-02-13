import "./CountDown.scss";
import staticCount from "../../assets/images/staticCountDown.png";
import gifCount from "../../assets/images/visualCountDown.gif";
import { useEffect, useState } from "react";
function CountDown() {
    const [countDown, setCountDown] = useState(false);

    useEffect(() => {
        if(countDown) {
            setTimeout(() => {
                setCountDown(false);
            }, 2000)
        }
    }, [countDown])

    return (<>
    <div className="countdown">
        <div onClick={() => setCountDown(!countDown)} className="countdown__clock">
            <img src={countDown ? gifCount : staticCount}
            alt={countDown ? "gif of countdown" : "static countdown"} 
            className={countDown ? "countdown__gif" : "countdown__static"}
    />
    </div>
    <div className="countdown__instructions-wrapper">
    <p className="countdown__instructions">There are sneaky animals hiding behind each card, guess whose hiding where</p> 
    <span className="countdown__bone">With each correct answer, you get another bone for your class pet</span>
    <p className="countdown__rule">Listen carefully as the animals grow quieter and quieter</p>
    </div>
    </div>
    </>)
    
}

export default CountDown;

    //  <div
    //       onClick={() => setFlipHorse(!flipHorse)}
    //       className="animalnoises__card horse"
    //     >
    //       <div
    //         className={`animalnoises__front ${
    //           flipHorse ? "animalnoises__horse-front" : ""
    //         }`}
    //       >
    //         <audio controls>
    //           <source
    //             className="animalnoises__audio"
    //             src={horse}
    //             type="audio/mp3"
    //           />
    //           <p>Your browser does not support this audio</p>
    //         </audio>
    //       </div>
    //       <div onClick={() => setFlipHorse(!flipHorse)} >
    //         <div
    //           className={`animalnoises__back ${
    //             flipHorse ? "" : "animalnoises__horse-back"
    //           }`}
    //         >
    //           <h3 className="animalnoises__text">Horse</h3>
    //           <img
    //             className="animalnoises__horse-gif"
    //             src="https://bestanimations.com/media/horse-art/570970473animated-horse-gif-105.gif#.Y-JymKMBO5k.link"
    //             alt="horse gif"
    //           />
    //         </div>
    //       </div>
    //     </div>