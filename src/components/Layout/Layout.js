import classes from "./Layout.module.css"
import Toolbar from "../Toolbar/Toolbar";
import Drawer from "../Drawer/Drawer";

const Layout = ({ children }) => {
    return (
        <div className={classes.Layout}>
            <Toolbar />
            <Drawer />
           <h1>{children}</h1> 
        </div>
    );
}

export default Layout;