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

function AnimalNoises() {
   
    return (
        <>
        <section className="animalnoises__wrapper">
      <div className="animalnoises__card horse">
        <audio controls>
            <source className="animalnoises__audio"src={horse} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>
      </div>
      <div className="animalnoises__card whale">
      <audio controls>
            <source className="animalnoises__audio"src={whale} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>
      </div>
      <div className="animalnoises__card cat">
      <audio controls>
            <source className="animalnoises__audio"src={cat} type="audio/mp3" />
            <p>Your browser does not support this audio</p>
        </audio>
      </div>
      <div className="animalnoises__card duck">
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