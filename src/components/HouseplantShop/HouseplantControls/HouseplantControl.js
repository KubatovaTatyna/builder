import classes from "../HouseplantControls/HouseplantControl.module.css";
import HouseplantPotSize from "../HouseplantPotSize/HouseplantPotSize"
import Button from "../../UI/Button/Button"

const HouseplantControl = ({type , addPot , removePot , count}) => {
    return (
    <div className={classes.HouseplantControl}>
        <Button 
        className={classes.Button} 
        onClick={() => addPot(type)}>+</Button>
         <HouseplantPotSize type={type} />
        <Button 
        className={classes.Button} 
        onClick={() => removePot(type)} disabled={!count}>-</Button>
    </div> );
}
 
export default HouseplantControl;