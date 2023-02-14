import "./CallBacks.scss"
import AnimalNoises from "../../components/AnimalNoises/AnimalNoises";
import CallBackPts from "../../components/CallBackPts/CallBackPts";
import CountDown from "../../components/CountDown/CountDown";
import CallBackPets from "../../components/CallbackPet/CallbackPet";
import HPBubbles from "../../components/HPBubbles/HPBubbles";
import CallBacksHeader from "../../components/CallBacksHeader/CallBacksHeader";

function Callbacks() {
    return (
        <>
        <CallBacksHeader /> 
        <CountDown />
        <CallBackPts />
        <CallBackPets />
        <AnimalNoises />
        <HPBubbles />
        </>
    )
}

export default Callbacks;