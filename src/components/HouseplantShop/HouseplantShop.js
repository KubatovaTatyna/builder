import HouseplantControls from "./HouseplantControls/HouseplantControls";
import HouseplantPreview from "./HouseplantPreview/HouseplantPreview";
import classes from "./HouseplantShop.module.css";
import {useState} from "react";

const HouseplantShop = () => {
    const [pots, setPots] = useState({
        alocasia:1,
        begonia:1,
        bonsai:1,
        calathea:1,
        cyclamen:1,
        dracaena:1
    })
    function addPot(type){
        const newPots = {...pots};
        newPots[type]++;
        setPots(newPots);
    }
    function removePot(type) {
        if(pots[type]){
            const newPots = {...pots};
            newPots[type]--;
            setPots(newPots)
        }
    }
    return ( 
        <div>
        <h1 className={classes.H1}> Houseplant Shop </h1>
        <div className={classes.HouseplantShop}>
            <HouseplantPreview pots={pots} />
            <HouseplantControls pots={pots} addPot={addPot} removePot={removePot}/>
        </div>
        </div>
     );
}
 
export default HouseplantShop;