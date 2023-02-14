import { useState } from "react";
import "./CallBackPts.scss";
import bone from "../../assets/images/bone.gif";
function CallBackPts() {
    const [points, setPoints] = useState(0)

    function AddPointsHandler() {
        setPoints(points +1)
    }
    function MinusPointsHandler() {
        setPoints(points -1)
    }
    return(
        <>
        <div className="pts">
            <div className="pts__mega-wrapper">
            
            <div className="pts__wrapper">
        <button className="pts__add" onClick={AddPointsHandler}>+</button>
        <div className="pts__sum">{points}
        <img src={bone} alt="bone gif" className="pts__bone" /></div>
        <button className="pts__minus" onClick={MinusPointsHandler}>-</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default CallBackPts;