
import alocasia from "../../../images/alocasia.svg"
import begonia from "../../../images/begonia.svg"
import bonsai from "../../../images/bonsai.svg"
import calathea from "../../../images/calathea.svg"
import cyclamen from "../../../images/cyclamen.svg"
import dracaena from "../../../images/dracaena.svg"
const HouseplantPotSize =({type}) => {
    const types = {
        alocasia : {backgroundImage : `url(${alocasia})` , width:"50px", height:"50px"},
        begonia : {backgroundImage : `url(${begonia})` , width:"50px", height:"50px"},
        bonsai : {backgroundImage : `url(${bonsai})` , width:"50px", height:"50px"},
        calathea : {backgroundImage : `url(${calathea})` , width:"50px", height:"50px"},
        cyclamen : {backgroundImage : `url(${cyclamen})` , width:"50px", height:"50px"},
        dracaena : {backgroundImage : `url(${dracaena})` , width:"50px", height:"50px"}
    }
    return ( 
        <div style={types[type]}></div>
     );
}
 
export default HouseplantPotSize;