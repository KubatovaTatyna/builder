import HouseplantControl from "./HouseplantControl";
import classes from "./HouseplantControls.module.css";
import Button from "../../UI/Button/Button";

const HouseplantControls = ({ pots, startOrdering }) => {
  const results = [];
  let total = 0;
  for (const pot in pots) {
    total += pots[pot];
    results.push(<HouseplantControl type={pot} count={pots[pot]} key={pot} />);
  }
  return (
    <div className={classes.HouseplantControls}>
      {results}
      <Button disabled={!total} onClick={startOrdering}>
        Order
      </Button>
    </div>
  );
};

export default HouseplantControls;
