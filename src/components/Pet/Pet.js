import "./Pet.scss"
import cheering from "../../assets/images/cheering.gif";
import chat from "../../assets/images/chat.png";
import { useEffect, useState } from "react";
import axios from "axios";
function Pet() {
    const [isPetShown, setIsPetShown] = useState(false);
    const [dogBubble, setDogBubble] = useState([])

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
              ` http://localhost:8080/dog`
            );
            console.log(response.data[0])
            // setDogBubble(response.data);
            setDogBubble(response.data[0])
        
          } catch (error) {
            console.log(error);
          }
        };
        dogSays();
      }, []);

    return (
        <div className="pet">
            {isPetShown && ( 
            <div className="pet__wrapper">
            <img src={cheering} alt="speech bubble" className="pet__cheering" />
            <div className="pet__bubble-wrap">
            <img src={chat} alt="speech bubble" className="pet__chat" />
            <span className="pet__bubble-text">{dogBubble.say}</span>
            </div>
            
        </div>
        )}
        </div>
    )
}

export default Pet;