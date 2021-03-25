import classes from "./HouseplantPot.module.css"

import cactusImage from "../../../images/cactus.svg"
import arrowheadImage from "../../../images/arrowhead.svg"

const HouseplantPot = ({type}) => {
    const types = {
        cactus : {backgroundImage : `url(${cactusImage})` , width:"80px", height:"80px"},
        arrowhead : {backgroundImage : `url(${arrowheadImage})` , width:"80px", height:"80px"}
    }
    return ( 
        <div className={classes.HouseplantPot} style={types[type]}></div>
     );
}
 
export default HouseplantPot;