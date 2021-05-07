import classes from "../HouseplantControls/HouseplantControl.module.css";
import HouseplantPotSize from "../HouseplantPotSize/HouseplantPotSize"
import Button from "../../UI/Button/Button";
import soundRemove from "../../../audio/plant-sound.mp3"
import { useDispatch } from "react-redux";
import { add, remove } from "../../../store/actions/builder";


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
        onClick={() => dispatch(add(type))}>+</Button>
         <HouseplantPotSize type={type} />
        <Button 
        className={classes.Button} 
        onClick={() => {dispatch(remove(type)) ; removeSound()}} disabled={!count}>-</Button>
    </div> );
}
 
export default HouseplantControl;