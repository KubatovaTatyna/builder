import classes from "../HouseplantControls/HouseplantControl.module.css";
import HouseplantPotSize from "../HouseplantPotSize/HouseplantPotSize"

const HouseplantControl = ({type , addPot , removePot}) => {
   
    return (
    <div className={classes.HouseplantControl}>
        <button 
        className={classes.Button} 
        onClick={() => addPot(type)}>+</button>
         <HouseplantPotSize type={type} />
        <button 
        className={classes.Button} 
        onClick={() => removePot(type)}>-</button>
    </div> );
}
 
export default HouseplantControl;