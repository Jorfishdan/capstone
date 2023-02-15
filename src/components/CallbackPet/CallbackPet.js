import "./CallbackPet.scss"
import chat from "../../assets/images/chat.png";
import dog3 from "../../assets/images/dog3.gif";
import { useEffect, useState } from "react";
import axios from "axios";
function CallbackPet() {
    const [isPetShown, setIsPetShown] = useState(false);
    const [dogBubble, setDogBubble] = useState([]);
    const [sayIndex, setSayIndex] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setIsPetShown(true)
            
        }, 3000)
    }, [isPetShown])

    useEffect(() => {
        if(isPetShown) {
        setTimeout(() => {
          setIsPetShown(false)
           
        }, 10000)
    }
    }, [isPetShown])

    useEffect(() => {
        const dogSays = async () => {
          try {
            const response = await axios.get(
              ` http://localhost:8080/callbacks`
            );
            setDogBubble(response.data)
        
          } catch (error) {
            console.log(error);
          }
        };
        dogSays();
      }, []);

      useEffect(() => {
        if(isPetShown) {
            setTimeout(() => {
                setSayIndex(sayIndex === dogBubble.length -1 ? 0 : sayIndex +1)
            }, 10000)
        }
      }, [isPetShown, sayIndex, sayIndex.length])

    return (
        <div className="callbackPets">
            {isPetShown && ( 
            <div className="callbackPets__wrapper">
            <img src={dog3} alt="speech bubble" className="callbackPets__cheering" />
            <div className="callbackPets__bubble-wrap">
              
            <img src={chat} alt="speech bubble" className="callbackPets__chat" />
            <span className="callbackPets__bubble-text">{dogBubble[sayIndex].say}</span>
            </div>
            
        </div>
        )}
        </div>
    )
}

export default CallbackPet;