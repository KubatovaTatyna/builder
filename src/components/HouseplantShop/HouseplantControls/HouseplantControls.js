import HouseplantControl from "./HouseplantControl";
import classes from "./HouseplantControls.module.css";

const HouseplantControls = ({pots , addPot , removePot}) => {
    const results =[];
    for (const pot in pots) {
        results.push(<HouseplantControl type={pot} addPot={addPot} removePot={removePot}/>)
    }
    return ( 
        <div className={classes.HouseplantControls}>{results}</div>
     );
}
 
export default HouseplantControls;