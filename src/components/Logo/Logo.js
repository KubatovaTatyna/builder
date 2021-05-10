import classes from "./Logo.module.css"
import logo2 from "../../images/logo2.svg"
const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img alt="Logo of the Houseplant project" src={logo2} className={classes.Logo} />
            <div>Houseplant</div>
        </div>
    );
}

export default Logo;