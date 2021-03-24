import classes from "./HouseplantPreview.module.css";
import HouseplantPot from "../HouseplantPot/HouseplantPot"

const HouseplantPreview = ({pots}) => {
    const result = [];
    for (const pot in pots) {
        for (let i = 0; i < pots[pot]; i++) {
            result.push(<HouseplantPot type={pot} />)
        }
    }
    return ( 
        <div className={classes.HouseplantPreview}>
            {result}
        </div>
     );
}
 
export default HouseplantPreview;