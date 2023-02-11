import "./AnimalNoises.scss";
import horse from "../../assets/audio/horse.mp3";
import cat from "../../assets/audio/cat.mp3";
import duck from "../../assets/audio/duck.mp3";
import pig from "../../assets/audio/pig.mp3";
import dog from "../../assets/audio/dog.mp3";
import owl from "../../assets/audio/owl.mp3";
import cow from "../../assets/audio/cow.mp3";
import count from "../../assets/audio/countdown.mp3";
import home from "../../assets/images/home.png";
import chicken from "../../assets/audio/chicken.mp3";
import frog from "../../assets/audio/frog.mp3";
import house from "../../assets/images/house-static.png";
import {  useState } from "react";
import { Link } from "react-router-dom";
import { Reorder } from "framer-motion";


function AnimalNoises() {
  const [flipHorse, setFlipHorse] = useState(false);
  const [flipFrog, setFlipFrog] = useState(false);
  const [flipCat, setFlipCat] = useState(false);
  const [flipDuck, setFlipDuck] = useState(false);
  const [flipPig, setFlipPig] = useState(false);
  const [flipDog, setFlipDog] = useState(false);
  const [flipOwl, setFlipOwl] = useState(false);
  const [flipChicken, setFlipChicken] = useState(false);
  const [flipCow, setFlipCow] = useState(false);
  const [items, setItems] = useState([0,1,2,3,4,5,6,7,8,9])

  
  return (
    <>

      <h1 className="animalnoises__title">
        Click below to start the countdown to the game!
      </h1>
      <button className="animalnoises__countdown">
        <audio controls>
          <source
            className="animalnoises__audio"
            src={count}
            type="audio/mp3"
          />
        </audio>
      </button>

      <section className="animalnoises__wrapper">
        <div
          onClick={() => setFlipHorse(!flipHorse)}
          className="animalnoises__card horse"
        >
          <div
            className={`animalnoises__front ${
              flipHorse ? "animalnoises__horse-front" : ""
            }`}
          >
            <audio controls>
              <source
                className="animalnoises__audio"
                src={horse}
                type="audio/mp3"
              />
              <p>Your browser does not support this audio</p>
            </audio>
          </div>
          <div onClick={() => setFlipHorse(!flipHorse)}>
            <div
              className={`animalnoises__back ${
                flipHorse ? "" : "animalnoises__horse-back"
              }`}
            >
              <h3 className="animalnoises__text">Horse</h3>
              <img
                className="animalnoises__horse-gif"
                src="https://bestanimations.com/media/horse-art/570970473animated-horse-gif-105.gif#.Y-JymKMBO5k.link"
                alt="horse gif"
              />
            </div>
          </div>
        </div>

        <div
          onClick={() => setFlipFrog(!flipFrog)}
          className="animalnoises__card frog"
        >
          <div
            className={`animalnoises__front ${
              flipFrog ? "animalnoises__frog-front" : ""
            }`}
          >
            <audio controls>
              <source
                className="animalnoises__audio"
                src={frog}
                type="audio/mp3"
              />
              <p>Your browser does not support this audio</p>
            </audio>
          </div>
          <div onClick={() => setFlipFrog(!flipFrog)}>
            <div
              className={`animalnoises__back ${
                flipFrog ? "" : "animalnoises__frog-back"
              }`}
            >
              <h3 className="animalnoises__text">Frog</h3>
              <img
                className="animalnoises__frog-gif"
                src="https://i.pinimg.com/originals/2c/80/d2/2c80d2ced9451189047bc6f0c8a54852.gif"
                alt="cartoon frog gif"
              />
            </div>
          </div>
        </div>

        <div
          onClick={() => setFlipCat(!flipCat)}
          className="animalnoises__card cat"
        >
          <div
            className={`animalnoises__front ${
              flipCat ? "animalnoises__cat-front" : ""
            }`}
          >
            <audio controls>
              <source
                className="animalnoises__audio"
                src={cat}
                type="audio/mp3"
              />
              <p>Your browser does not support this audio</p>
            </audio>
          </div>
          <div onClick={() => setFlipCat(!flipCat)}>
            <div
              className={`animalnoises__back ${
                flipCat ? "" : "animalnoises__cat-back"
              }`}
            >
              <h3 className="animalnoises__text">Cat</h3>
              <img
                className="animalnoises__cat-gif"
                src="https://d.furaffinity.net/art/margoevergarden/1642552507/1642552431.margoevergarden_na-belom.gif"
                alt="spinnin cat gif"
              />
            </div>
          </div>
        </div>

        <div
          onClick={() => setFlipDuck(!flipDuck)}
          className="animalnoises__card duck"
        >
          <div
            className={`animalnoises__front ${
              flipDuck ? "animalnoises__duck-front" : ""
            }`}
          >
            <audio controls>
              <source
                className="animalnoises__audio"
                src={duck}
                type="audio/mp3"
              />
              <p>Your browser does not support this audio</p>
            </audio>
          </div>
          <div onClick={() => setFlipDuck(!flipDuck)}>
            <div
              className={`animalnoises__back ${
                flipDuck ? "" : "animalnoises__duck-back"
              }`}
            >
              <h3 className="animalnoises__text">Duck</h3>
              <img
                className="animalnoises__duck-gif"
                src="https://media.giphy.com/media/hC2mA1FWFs2OowO60p/giphy.gif"
                alt="cartoon duck gif"
              />
            </div>
          </div>
        </div>

        <div
          onClick={() => setFlipPig(!flipPig)}
          className="animalnoises__card pig"
        >
          <div
            className={`animalnoises__front ${
              flipPig ? "animalnoises__pig-front" : ""
            }`}
          >
            <audio controls>
              <source
                className="animalnoises__audio"
                src={pig}
                type="audio/mp3"
              />
              <p>Your browser does not support this audio</p>
            </audio>
          </div>
          <div onClick={() => setFlipPig(!flipPig)}>
            <div
              className={`animalnoises__back ${
                flipPig ? "" : "animalnoises__pig-back"
              }`}
            >
              <h3 className="animalnoises__text">Pig</h3>
              <img
                className="animalnoises__pig-gif"
                src="https://wallpaperaccess.com/full/4105045.gif"
                alt="cartoon pig gif"
              />
            </div>
          </div>
        </div>

        <div
          onClick={() => setFlipDog(!flipDog)}
          className="animalnoises__card dog"
        >
          <div
            className={`animalnoises__front ${
              flipDog ? "animalnoises__dog-front" : ""
            }`}
          >
            <audio controls>
              <source
                className="animalnoises__audio"
                src={dog}
                type="audio/mp3"
              />
              <p>Your browser does not support this audio</p>
            </audio>
          </div>
          <div onClick={() => setFlipDog(!flipDog)}>
            <div
              className={`animalnoises__back ${
                flipDog ? "" : "animalnoises__dog-back"
              }`}
            >
              <h3 className="animalnoises__text">Dog</h3>
              <img
                className="animalnoises__dog-gif"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/74731f76965389.5c7945b0cfcc3.gif"
                alt="dog gif"
              />
            </div>
          </div>
        </div>

        <div
          onClick={() => setFlipOwl(!flipOwl)}
          className="animalnoises__card owl"
        >
          <div
            className={`animalnoises__front ${
              flipOwl ? "animalnoises__owl-front" : ""
            }`}
          >
            <audio controls>
              <source
                className="animalnoises__audio"
                src={owl}
                type="audio/mp3"
              />
              <p>Your browser does not support this audio</p>
            </audio>
          </div>
          <div onClick={() => setFlipOwl(!flipOwl)}>
            <div
              className={`animalnoises__back ${
                flipOwl ? "" : "animalnoises__owl-back"
              }`}
            >
              <h3 className="animalnoises__text">Owl</h3>
              <img
                className="animalnoises__owl-gif"
                src="https://i.pinimg.com/originals/b8/1d/57/b81d57eef7c9a758a3982d5e5182e042.gif"
                alt="cartoon owl gif"
              />
            </div>
          </div>
        </div>

        <div
          onClick={() => setFlipChicken(!flipChicken)}
          className="animalnoises__card chicken"
        >
          <div
            className={`animalnoises__front ${
              flipChicken ? "animalnoises__chicken-front" : ""
            }`}
          >
            <audio controls>
              <source
                className="animalnoises__audio"
                src={chicken}
                type="audio/mp3"
              />
              <p>Your browser does not support this audio</p>
            </audio>
          </div>
          <div onClick={() => setFlipChicken(!flipChicken)}>
            <div
              className={`animalnoises__back ${
                flipChicken ? "" : "animalnoises__chicken-back"
              }`}
            >
              <h3 className="animalnoises__text">Chicken</h3>
              <img
                className="animalnoises__chicken-gif"
                src="https://i.pinimg.com/originals/86/4d/db/864ddbd1733fae90c62cf71199bb7b9c.gif"
                alt="cartoon chicken gif"
              />
            </div>
          </div>
        </div>

        <div
          onClick={() => setFlipCow(!flipCow)}
          className="animalnoises__card cow"
        >
          <div
            className={`animalnoises__front ${
              flipCow ? "animalnoises__cow-front" : ""
            }`}
          >
            <audio controls>
              <source
                className="animalnoises__audio"
                src={cow}
                type="audio/mp3"
              />
              <p>Your browser does not support this audio</p>
            </audio>
          </div>
          <div onClick={() => setFlipCow(!flipCow)}>
            <div
              className={`animalnoises__back ${
                flipCow ? "" : "animalnoises__cow-back"
              }`}
            >
              <h3 className="animalnoises__text">Cow</h3>
              <img
                className="animalnoises__cow-gif"
                src="https://i.pinimg.com/originals/8d/3a/90/8d3a907be5f70768cb79dc0809bfa3ae.gif"
                alt="cartoon cow gif"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AnimalNoises;


////////////BACKUP//////////////

// function AnimalNoises() {
//   const [flipHorse, setFlipHorse] = useState(false);
//   const [flipFrog, setFlipFrog] = useState(false);
//   const [flipCat, setFlipCat] = useState(false);
//   const [flipDuck, setFlipDuck] = useState(false);
//   const [flipPig, setFlipPig] = useState(false);
//   const [flipDog, setFlipDog] = useState(false);
//   const [flipOwl, setFlipOwl] = useState(false);
//   const [flipChicken, setFlipChicken] = useState(false);
//   const [flipCow, setFlipCow] = useState(false);
//   const [items, setItems] = useState([0,1,2,3,4,5,6,7,8,9])

  
//   return (
//     <>
//       <Link to="/">
//         <img
//           src={home}
//           alt="home icon to return to main menu"
//           className="animalnoises__home"
//         />
//       </Link>
//       <h1 className="animalnoises__title">
//         Click below to start the countdown to the game!
//       </h1>
//       <button className="animalnoises__countdown">
//         <audio controls>
//           <source
//             className="animalnoises__audio"
//             src={count}
//             type="audio/mp3"
//           />
//         </audio>
//       </button>

//       <section className="animalnoises__wrapper">
//         <div
//           onClick={() => setFlipHorse(!flipHorse)}
//           className="animalnoises__card horse"
//         >
//           <div
//             className={`animalnoises__front ${
//               flipHorse ? "animalnoises__horse-front" : ""
//             }`}
//           >
//             <audio controls>
//               <source
//                 className="animalnoises__audio"
//                 src={horse}
//                 type="audio/mp3"
//               />
//               <p>Your browser does not support this audio</p>
//             </audio>
//           </div>
//           <div onClick={() => setFlipHorse(!flipHorse)}>
//             <div
//               className={`animalnoises__back ${
//                 flipHorse ? "" : "animalnoises__horse-back"
//               }`}
//             >
//               <h3 className="animalnoises__text">Horse</h3>
//               <img
//                 className="animalnoises__horse-gif"
//                 src="https://bestanimations.com/media/horse-art/570970473animated-horse-gif-105.gif#.Y-JymKMBO5k.link"
//                 alt="horse gif"
//               />
//             </div>
//           </div>
//         </div>

//         <div
//           onClick={() => setFlipFrog(!flipFrog)}
//           className="animalnoises__card frog"
//         >
//           <div
//             className={`animalnoises__front ${
//               flipFrog ? "animalnoises__frog-front" : ""
//             }`}
//           >
//             <audio controls>
//               <source
//                 className="animalnoises__audio"
//                 src={frog}
//                 type="audio/mp3"
//               />
//               <p>Your browser does not support this audio</p>
//             </audio>
//           </div>
//           <div onClick={() => setFlipFrog(!flipFrog)}>
//             <div
//               className={`animalnoises__back ${
//                 flipFrog ? "" : "animalnoises__frog-back"
//               }`}
//             >
//               <h3 className="animalnoises__text">Frog</h3>
//               <img
//                 className="animalnoises__frog-gif"
//                 src="https://i.pinimg.com/originals/2c/80/d2/2c80d2ced9451189047bc6f0c8a54852.gif"
//                 alt="cartoon frog gif"
//               />
//             </div>
//           </div>
//         </div>

//         <div
//           onClick={() => setFlipCat(!flipCat)}
//           className="animalnoises__card cat"
//         >
//           <div
//             className={`animalnoises__front ${
//               flipCat ? "animalnoises__cat-front" : ""
//             }`}
//           >
//             <audio controls>
//               <source
//                 className="animalnoises__audio"
//                 src={cat}
//                 type="audio/mp3"
//               />
//               <p>Your browser does not support this audio</p>
//             </audio>
//           </div>
//           <div onClick={() => setFlipCat(!flipCat)}>
//             <div
//               className={`animalnoises__back ${
//                 flipCat ? "" : "animalnoises__cat-back"
//               }`}
//             >
//               <h3 className="animalnoises__text">Cat</h3>
//               <img
//                 className="animalnoises__cat-gif"
//                 src="https://d.furaffinity.net/art/margoevergarden/1642552507/1642552431.margoevergarden_na-belom.gif"
//                 alt="spinnin cat gif"
//               />
//             </div>
//           </div>
//         </div>

//         <div
//           onClick={() => setFlipDuck(!flipDuck)}
//           className="animalnoises__card duck"
//         >
//           <div
//             className={`animalnoises__front ${
//               flipDuck ? "animalnoises__duck-front" : ""
//             }`}
//           >
//             <audio controls>
//               <source
//                 className="animalnoises__audio"
//                 src={duck}
//                 type="audio/mp3"
//               />
//               <p>Your browser does not support this audio</p>
//             </audio>
//           </div>
//           <div onClick={() => setFlipDuck(!flipDuck)}>
//             <div
//               className={`animalnoises__back ${
//                 flipDuck ? "" : "animalnoises__duck-back"
//               }`}
//             >
//               <h3 className="animalnoises__text">Duck</h3>
//               <img
//                 className="animalnoises__duck-gif"
//                 src="https://media.giphy.com/media/hC2mA1FWFs2OowO60p/giphy.gif"
//                 alt="cartoon duck gif"
//               />
//             </div>
//           </div>
//         </div>

//         <div
//           onClick={() => setFlipPig(!flipPig)}
//           className="animalnoises__card pig"
//         >
//           <div
//             className={`animalnoises__front ${
//               flipPig ? "animalnoises__pig-front" : ""
//             }`}
//           >
//             <audio controls>
//               <source
//                 className="animalnoises__audio"
//                 src={pig}
//                 type="audio/mp3"
//               />
//               <p>Your browser does not support this audio</p>
//             </audio>
//           </div>
//           <div onClick={() => setFlipPig(!flipPig)}>
//             <div
//               className={`animalnoises__back ${
//                 flipPig ? "" : "animalnoises__pig-back"
//               }`}
//             >
//               <h3 className="animalnoises__text">Pig</h3>
//               <img
//                 className="animalnoises__pig-gif"
//                 src="https://wallpaperaccess.com/full/4105045.gif"
//                 alt="cartoon pig gif"
//               />
//             </div>
//           </div>
//         </div>

//         <div
//           onClick={() => setFlipDog(!flipDog)}
//           className="animalnoises__card dog"
//         >
//           <div
//             className={`animalnoises__front ${
//               flipDog ? "animalnoises__dog-front" : ""
//             }`}
//           >
//             <audio controls>
//               <source
//                 className="animalnoises__audio"
//                 src={dog}
//                 type="audio/mp3"
//               />
//               <p>Your browser does not support this audio</p>
//             </audio>
//           </div>
//           <div onClick={() => setFlipDog(!flipDog)}>
//             <div
//               className={`animalnoises__back ${
//                 flipDog ? "" : "animalnoises__dog-back"
//               }`}
//             >
//               <h3 className="animalnoises__text">Dog</h3>
//               <img
//                 className="animalnoises__dog-gif"
//                 src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/74731f76965389.5c7945b0cfcc3.gif"
//                 alt="dog gif"
//               />
//             </div>
//           </div>
//         </div>

//         <div
//           onClick={() => setFlipOwl(!flipOwl)}
//           className="animalnoises__card owl"
//         >
//           <div
//             className={`animalnoises__front ${
//               flipOwl ? "animalnoises__owl-front" : ""
//             }`}
//           >
//             <audio controls>
//               <source
//                 className="animalnoises__audio"
//                 src={owl}
//                 type="audio/mp3"
//               />
//               <p>Your browser does not support this audio</p>
//             </audio>
//           </div>
//           <div onClick={() => setFlipOwl(!flipOwl)}>
//             <div
//               className={`animalnoises__back ${
//                 flipOwl ? "" : "animalnoises__owl-back"
//               }`}
//             >
//               <h3 className="animalnoises__text">Owl</h3>
//               <img
//                 className="animalnoises__owl-gif"
//                 src="https://i.pinimg.com/originals/b8/1d/57/b81d57eef7c9a758a3982d5e5182e042.gif"
//                 alt="cartoon owl gif"
//               />
//             </div>
//           </div>
//         </div>

//         <div
//           onClick={() => setFlipChicken(!flipChicken)}
//           className="animalnoises__card chicken"
//         >
//           <div
//             className={`animalnoises__front ${
//               flipChicken ? "animalnoises__chicken-front" : ""
//             }`}
//           >
//             <audio controls>
//               <source
//                 className="animalnoises__audio"
//                 src={chicken}
//                 type="audio/mp3"
//               />
//               <p>Your browser does not support this audio</p>
//             </audio>
//           </div>
//           <div onClick={() => setFlipChicken(!flipChicken)}>
//             <div
//               className={`animalnoises__back ${
//                 flipChicken ? "" : "animalnoises__chicken-back"
//               }`}
//             >
//               <h3 className="animalnoises__text">Chicken</h3>
//               <img
//                 className="animalnoises__chicken-gif"
//                 src="https://i.pinimg.com/originals/86/4d/db/864ddbd1733fae90c62cf71199bb7b9c.gif"
//                 alt="cartoon chicken gif"
//               />
//             </div>
//           </div>
//         </div>

//         <div
//           onClick={() => setFlipCow(!flipCow)}
//           className="animalnoises__card cow"
//         >
//           <div
//             className={`animalnoises__front ${
//               flipCow ? "animalnoises__cow-front" : ""
//             }`}
//           >
//             <audio controls>
//               <source
//                 className="animalnoises__audio"
//                 src={cow}
//                 type="audio/mp3"
//               />
//               <p>Your browser does not support this audio</p>
//             </audio>
//           </div>
//           <div onClick={() => setFlipCow(!flipCow)}>
//             <div
//               className={`animalnoises__back ${
//                 flipCow ? "" : "animalnoises__cow-back"
//               }`}
//             >
//               <h3 className="animalnoises__text">Cow</h3>
//               <img
//                 className="animalnoises__cow-gif"
//                 src="https://i.pinimg.com/originals/8d/3a/90/8d3a907be5f70768cb79dc0809bfa3ae.gif"
//                 alt="cartoon cow gif"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default AnimalNoises;