import HouseplantControls from "./HouseplantControls/HouseplantControls";
import HouseplantPreview from "./HouseplantPreview/HouseplantPreview";
import classes from "./HouseplantShop.module.css";

const HouseplantShop = () => {
    const pots ={
        cactus:4,
        arrowhead:5,
    }
    return ( 
        <div className={classes.HouseplantShop}>
            <HouseplantPreview pots={pots} />
            <HouseplantControls />
        </div>
     );
}
 
export default HouseplantShop;