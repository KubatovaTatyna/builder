import classes from "./Logo.module.css"
import logo from "../../images/logo.svg"
const Logo = () => {
    return ( 
        <div className={classes.Logo}>
            <img  alt="Logo" src={logo} />
        </div>
     );
}
 
export default Logo;