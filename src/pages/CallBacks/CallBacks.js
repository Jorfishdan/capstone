import "./CallBacks.scss"
import AnimalNoises from "../../components/AnimalNoises/AnimalNoises";
import CallBackPts from "../../components/CallBackPts/CallBackPts";
import CountDown from "../../components/CountDown/CountDown";
import CallBackPets from "../../components/CallbackPet/CallbackPet";
import HPBubbles from "../../components/HPBubbles/HPBubbles";
import Footer from "../../components/Footer/Footer";
import Menu from "../../components/Menu/Menu";

function Callbacks() {
    return (
        <>
        <Menu />
        <CountDown />
        <CallBackPts />
        <CallBackPets />
        <AnimalNoises />
        <HPBubbles />
        <Footer />
        </>
    )
}

export default Callbacks;