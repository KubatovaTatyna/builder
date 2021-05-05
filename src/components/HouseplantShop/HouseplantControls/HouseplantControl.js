import classes from "../HouseplantControls/HouseplantControl.module.css";
import HouseplantPotSize from "../HouseplantPotSize/HouseplantPotSize"
import Button from "../../UI/Button/Button";
import soundRemove from "../../../audio/plant-sound.mp3"
import { useDispatch } from "react-redux";
// import soundAdd from "../../../audio/plant-sound-plus.mp3"


const HouseplantControl = ({type , count}) => {

    const dispatch = useDispatch()

    function removeSound() {
        let audio = new Audio();
        audio.preload ='auto';
        audio.src = soundRemove;
        audio.play();
    }
    return (
    <div className={classes.HouseplantControl}>
        <Button 
        className={classes.Button} 
        onClick={() => dispatch({type: "ADD_POT" ,  pot:type})}>+</Button>
         <HouseplantPotSize type={type} />
        <Button 
        className={classes.Button} 
        onClick={() => {dispatch({type: "REMOVE_POT" , pot:type}) ; removeSound()}} disabled={!count}>-</Button>
    </div> );
}
 
export default HouseplantControl;