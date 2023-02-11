import "./Pet.scss"
import cheering from "../../assets/images/cheering.gif";
import chat from "../../assets/images/chat.png";
import { useEffect, useState } from "react";
import axios from "axios";
function Pet() {
    const [isPetShown, setIsPetShown] = useState(false);
    const [dogBubble, setDogBubble] = useState([]);
    const [sayIndex, setSayIndex] = useState(0);
    const [isRolledOut, SetIsRolledOut] = useState(false);

    // function rollOut() {
    //   SetIsRolledOut(true)
    // }

    useEffect(() => {
        setTimeout(() => {
            setIsPetShown(true)
            SetIsRolledOut(true)
            
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
            console.log(response.data)
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
        <div className="pet">
            {isPetShown && ( 
            <div className="pet__wrapper">
            {/* <div className={`pet__wrapper ${isRolledOut ? "rollout" : ""}`}> */}
            <img src={cheering} alt="speech bubble" className="pet__cheering" />
            <div className="pet__bubble-wrap">
            <img src={chat} alt="speech bubble" className="pet__chat" />
            <span className="pet__bubble-text">{dogBubble[sayIndex].say}</span>
            </div>
            
        </div>
        )}
        </div>
    )
}

export default Pet;