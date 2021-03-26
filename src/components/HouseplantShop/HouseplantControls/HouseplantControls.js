import classes from "./HouseplantControls.module.css";

const HouseplantControls = ({pots}) => {
    const results =[];
    for (const pot in pots) {
        results.push(pot)
    }
    return ( 
        <div className={classes.HouseplantControls}>{results}</div>
     );
}
 
export default HouseplantControls;