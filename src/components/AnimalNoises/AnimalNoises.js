import './AnimalNoises.scss';
import horse from "../../assets/audio/horse.mp3";
import whale from "../../assets/audio/whale.mp3";
import cat from "../../assets/audio/cat.mp3";
import duck from "../../assets/audio/duck.mp3";
import pig from "../../assets/audio/pig.mp3";
import dog from "../../assets/audio/dog.mp3";
import owl from "../../assets/audio/owl.mp3";
import sheep from "../../assets/audio/sheep.mp3";
import cow from "../../assets/audio/cow.mp3";
import count from "../../assets/audio/countdown.mp3";
import home from "../../assets/images/home.png";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import spin from "../../assets/images/spinning-cat.gif";

function AnimalNoises() {
    
    const [flip, setFlip] = useState(false);
   
    return (
        <>
        <Link to="/"><img src={home} alt="home icon to return to main menu" className="animalnoises__home" /></Link>
        <h1 className="animalnoises__title">Click below to start the countdown to the game!</h1>
        <button className="animalnoises__countdown" > 
       <audio controls>
            <source className="animalnoises__audio"src={count} type="audio/mp3" />
        </audio>  
        </button>
        <section className="animalnoises__wrapper">
      <div onClick = {() => setFlip(!flip)}className="animalnoises__card horse">
        <img className="animalnoises__horse-gif" src="https://bestanimations.com/media/horse-art/570970473animated-horse-gif-105.gif#.Y-JymKMBO5k.link" alt="horse gif" />
        <audio controls>
            <source className="animalnoises__audio"src={horse} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
            {/* {flip ? audio : img} */}
        </audio>
      </div>
      <div className="animalnoises__card whale">
        {/* <img src="https://tenor.com/bKnc6.gif" alt="whale gif" /> */}
      <img className="animalnoises__whale-gif" src="https://bestanimations.com/media/whales/1650489779animated-orcs-whales-gif-7.gif#.Y-KLIQqtC4E.link" alt="whale gif" />
      <audio controls>

            <source className="animalnoises__audio"src={whale} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>
      </div>
      <div className="animalnoises__card cat">
        <img className="animalnoises__cat-gif" src="https://d.furaffinity.net/art/margoevergarden/1642552507/1642552431.margoevergarden_na-belom.gif" alt="spinnin cat gif" />
      <audio controls>
            <source className="animalnoises__audio"src={cat} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>
      </div>
      <div className="animalnoises__card duck">
      <iframe className="animalnoises__duck-gif" src="https://giphy.com/embed/hC2mA1FWFs2OowO60p" width="480" height="428" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <audio controls>
            <source className="animalnoises__audio"src={duck} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>

      </div>
      <div className="animalnoises__card pig">
      <audio controls>
            <source className="animalnoises__audio"src={pig} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>
        </div>
      <div className="animalnoises__card dog"> <audio controls>
            <source className="animalnoises__audio"src={dog} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio></div>
      <div className="animalnoises__card owl">
      <audio controls>
            <source className="animalnoises__audio"src={owl} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>
      </div>
      <div className="animalnoises__card sheep">
      <audio controls>
            <source className="animalnoises__audio"src={sheep} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>
      </div>
      <div className="animalnoises__card cow">
      <audio controls>
            <source className="animalnoises__audio"src={cow} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>
      </div>
    </section>
 </>
    )
}

export default AnimalNoises;