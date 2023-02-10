import "./Pet.scss"
import cheering from "../../assets/images/cheering.gif";
import chat from "../../assets/images/chat.png";
import { useEffect, useState } from "react";
function Pet() {
    const [isPetShown, setIsPetShown] = useState(false);

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

    return (
        <div className="pet">
            {isPetShown && ( 
            <div className="pet__wrapper">
            <img src={cheering} alt="speech bubble" className="pet__cheering" />
            <div className="pet__bubble-wrap">
            <img src={chat} alt="speech bubble" className="pet__chat" />
            <span className="pet__bubble-text">Go class! I know you can beat the clock -woof!</span>
            </div>
            
        </div>
        )}
        </div>
    )
}

export default Pet;