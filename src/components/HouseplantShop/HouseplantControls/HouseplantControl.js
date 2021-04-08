import classes from "../HouseplantControls/HouseplantControl.module.css";
import HouseplantPotSize from "../HouseplantPotSize/HouseplantPotSize"
import Button from "../../UI/Button/Button";
import sound from "../../../audio/plant-sound.mp3"

const HouseplantControl = ({type , addPot , removePot , count}) => {
    function play() {
        let audio = new Audio();
        audio.preload ='auto';
        audio.src = sound
        audio.play()
    }
    return (
    <div className={classes.HouseplantControl}>
        <Button 
        className={classes.Button} 
        onClick={() => addPot(type)}>+</Button>
         <HouseplantPotSize type={type} />
        <Button 
        className={classes.Button} 
        onClick={() => {removePot(type) ; play()}} disabled={!count}>-</Button>
    </div> );
}
 
export default HouseplantControl;