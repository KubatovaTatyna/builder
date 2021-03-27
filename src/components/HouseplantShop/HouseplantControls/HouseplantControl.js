
import classes from "../HouseplantControls/HouseplantControl.module.css";
import HouseplantPot from "../HouseplantPot/HouseplantPot"

const HouseplantControl = ({type , addPot , removePot}) => {
   
    return (
    <div className={classes.HouseplantControl}>
        <button 
        className={classes.Button} 
        onClick={() => addPot(type)}>+</button>
         <HouseplantPot type={type} />
        <button 
        className={classes.Button} 
        onClick={() => removePot(type)}>-</button>
    </div> );
}
 
export default HouseplantControl;