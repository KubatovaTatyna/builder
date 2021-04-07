import HouseplantControl from "./HouseplantControl";
import classes from "./HouseplantControls.module.css";

const HouseplantControls = ({pots , addPot , removePot}) => {
    const results =[];
    let total = 0;
    for (const pot in pots) {
        total += pots[pots]
        results.push(<HouseplantControl type={pot} addPot={addPot} removePot={removePot}/>)
    }
    return ( 
        <div className={classes.HouseplantControls}>
            {results}
            <button disabled={!total}>Order</button>
        </div>
     );
}
 
export default HouseplantControls;