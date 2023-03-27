import './MathSelectPet.scss';
import { useEffect, useState } from "react";
import axios from "axios";
import dog from "../../assets/images/rottweiler.gif";
import chat from "../../assets/images/chat.png";

function MathSelectPet() {
    const [isPetShown, setIsPetShown] = useState(false);
  const [dogBubble, setDogBubble] = useState([]);
  const [sayIndex, setSayIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsPetShown(true);
    }, 10000);
  }, [isPetShown]);

  useEffect(() => {
    if (isPetShown) {
      setTimeout(() => {
        setIsPetShown(false);
      }, 30000);
    }
  }, [isPetShown]);

  useEffect(() => {
    const dogSays = async () => {
      try {
        const response = await axios.get(` http://localhost:8080/mathselect`);
        setDogBubble(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    dogSays();
  }, []);

  useEffect(() => {
    if (isPetShown) {
      setTimeout(() => {
        setSayIndex(sayIndex === dogBubble.length - 1 ? 0 : sayIndex + 1);
      }, 10000);
    }
  }, [isPetShown, sayIndex, sayIndex.length]);

  return (
    <div className="mspet">
      {isPetShown && (
        <div className="mspet__wrapper">
          <img src={dog} alt="speech bubble" className="mspet__cheering" />
          <div className="mspet__bubble-wrap">
            <img src={chat} alt="speech bubble" className="mspet__chat" />
            <span className="mspet__bubble-text">{dogBubble[sayIndex].say}</span>
          </div>
        </div>
      )}
    </div>
  );

}

export default MathSelectPet;