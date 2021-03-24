import HouseplantControls from "./HouseplantControls/HouseplantControls";
import HouseplantPreview from "./HouseplantPreview/HouseplantPreview";
import classes from "./HouseplantShop.module.css";

const HouseplantShop = () => {
    return ( 
        <div className={classes.HouseplantShop}>
            <HouseplantPreview />
            <HouseplantControls />
        </div>
     );
}
 
export default HouseplantShop;