import HouseplantControls from "./HouseplantControls/HouseplantControls";
import HouseplantPreview from "./HouseplantPreview/HouseplantPreview";
import classes from "./HouseplantShop.module.css";

const HouseplantShop = () => {
    const pots ={
        alocasia:2,
        begonia:4,
        bonsai:4,
        calathea:4,
        cyclamen:4,
        dracaena:4,
        echinocactus:4,
        opuntia:4,
        sansevieria:4,
        spurge:4,
    }
    return ( 
        <div className={classes.HouseplantShop}>
            <HouseplantPreview pots={pots} />
            <HouseplantControls />
        </div>
     );
}
 
export default HouseplantShop;