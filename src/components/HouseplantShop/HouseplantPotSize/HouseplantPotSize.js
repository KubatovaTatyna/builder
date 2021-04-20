
import alocasia from "../../../images/alocasia.svg"
import begonia from "../../../images/begonia.svg"
import bonsai from "../../../images/bonsai.svg"
import calathea from "../../../images/calathea.svg"
import cyclamen from "../../../images/cyclamen.svg"
import dracaena from "../../../images/dracaena.svg"
const HouseplantPotSize =({type}) => {
    const types = {
        alocasia : {backgroundImage : `url(${alocasia})` , width:"70px", height:"70px"},
        begonia : {backgroundImage : `url(${begonia})` , width:"70px", height:"70px"},
        bonsai : {backgroundImage : `url(${bonsai})` , width:"70px", height:"70px"},
        calathea : {backgroundImage : `url(${calathea})` , width:"70px", height:"70px"},
        cyclamen : {backgroundImage : `url(${cyclamen})` , width:"70px", height:"70px"},
        dracaena : {backgroundImage : `url(${dracaena})` , width:"70px", height:"70px"}
    }
    return ( 
        <div style={types[type]}></div>
     );
}
 
export default HouseplantPotSize;