import HouseplantControls from "./HouseplantControls/HouseplantControls";
import HouseplantPreview from "./HouseplantPreview/HouseplantPreview";
import classes from "./HouseplantShop.module.css";

const HouseplantShop = () => {
    const pots ={
        alocasia:1,
        begonia:1,
        bonsai:1,
        calathea:1,
        cyclamen:1,
        dracaena:1,
        echinocactus:1,
        opuntia:1,
        sansevieria:1,
        spurge:1,
    }
    return ( 
        <div className={classes.HouseplantShop}>
            <HouseplantPreview pots={pots} />
            <HouseplantControls />
        </div>
     );
}
 
export default HouseplantShop;