import classes from "./HouseplantPot.module.css"
const HouseplantPot = ({type}) => {
    return ( 
        <div className={classes.HouseplantPot}>
            {type}
        </div>
     );
}
 
export default HouseplantPot;