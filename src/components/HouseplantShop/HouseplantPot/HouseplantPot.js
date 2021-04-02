import classes from "./HouseplantPot.module.css"

const HouseplantPot =({type}) => {
    const pots = [classes.HouseplantPot , classes[type]]
    return ( 
        <div className={pots.join(" ")}></div>
     );
}
 
export default HouseplantPot;