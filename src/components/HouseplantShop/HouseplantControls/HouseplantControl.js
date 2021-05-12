import classes from "../HouseplantControls/HouseplantControl.module.css";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { add, remove } from "../../../store/actions/builder";
import HouseplantPotControls from "./HouseplantPotControls/HouseplantPotControls";

const HouseplantControl = ({ type, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.HouseplantControl}>
      <Button className={classes.Button} onClick={() => dispatch(add(type))}>
        +
      </Button>
      <HouseplantPotControls type={type} />
      <Button
        className={classes.Button}
        onClick={() => {
          dispatch(remove(type));
        }}
        disabled={!count}
      >
        -
      </Button>
    </div>
  );
};

export default HouseplantControl;
