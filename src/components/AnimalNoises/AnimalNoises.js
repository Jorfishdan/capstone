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
import chicken from "../../assets/audio/chicken.mp3";
import frog from "../../assets/audio/frog.mp3";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div onClick = {() => setFlip(!flip)} className="animalnoises__card horse">
        <div className={`animalnoises__front ${flip ? 'animalnoises__hidden': ''}`}>
        <audio controls>
            <source className="animalnoises__audio" src={horse} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>
      </div>
    <div onClick = {() =>setFlip(!flip)}>
      <div className={`animalnoises__back ${flip ? '' : 'animalnoises__hidden'}`}>
         <img className="animalnoises__horse-gif" src="https://bestanimations.com/media/horse-art/570970473animated-horse-gif-105.gif#.Y-JymKMBO5k.link" alt="horse gif" />
        </div>
        </div>
        </div>

      <div className="animalnoises__card frog">
      <img className="animalnoises__frog-gif" src="https://i.pinimg.com/originals/2c/80/d2/2c80d2ced9451189047bc6f0c8a54852.gif" alt="cartoon frog gif" />
      <audio controls>

            <source className="animalnoises__audio"src={frog} type="audio/mp3" />
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
        <img className="animalnoises__duck-gif" src="https://media.giphy.com/media/hC2mA1FWFs2OowO60p/giphy.gif" alt="cartoon duck gif" />
      <audio controls>
            <source className="animalnoises__audio"src={duck} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>

      </div>
      <div className="animalnoises__card pig">
        <img className="animalnoises__pig-gif" src="https://wallpaperaccess.com/full/4105045.gif" alt="cartoon pig gif" />
      <audio controls>
            <source className="animalnoises__audio"src={pig} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>
        </div>
      <div className="animalnoises__card dog"> 
      <img className="animalnoises__dog-gif" src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/74731f76965389.5c7945b0cfcc3.gif" alt="dog gif" />
        <audio controls>
            <source className="animalnoises__audio"src={dog} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio></div>
      <div className="animalnoises__card owl">
        <img className="animalnoises__owl-gif" src="https://i.pinimg.com/originals/b8/1d/57/b81d57eef7c9a758a3982d5e5182e042.gif" alt="cartoon owl gif" />
      <audio controls>
            <source className="animalnoises__audio"src={owl} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>
      </div>
      <div className="animalnoises__card chicken">
        <img className="animalnoises__chicken-gif" src="https://i.pinimg.com/originals/86/4d/db/864ddbd1733fae90c62cf71199bb7b9c.gif" alt="cartoon chicken gif" />
      <audio controls>
            <source className="animalnoises__audio"src={chicken} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>
      </div>
      <div className="animalnoises__card cow">
        <img className="animalnoises__cow-gif" src="https://i.pinimg.com/originals/8d/3a/90/8d3a907be5f70768cb79dc0809bfa3ae.gif" alt="cartoon cow gif" />
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