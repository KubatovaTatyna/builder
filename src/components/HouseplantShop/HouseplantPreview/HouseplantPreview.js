import classes from "./HouseplantPreview.module.css";
import HouseplantPot from "./HouseplantPot/HouseplantPot";
import shelf from "../../../images/shelf1.svg";

const HouseplantPreview = ({ pots, price }) => {
  const result = [];
  for (const pot in pots) {
    for (let i = 0; i < pots[pot]; i++) {
      result.push(<HouseplantPot type={pot} key={pot + i} />);
    }
  }
  return (
    <div className={classes.HouseplantPreview}>
      <div
        className={classes.shelf}
        style={{ backgroundImage: `url(${shelf})` }}
      >
        <div>
          <div className={classes.plantFlex}>{result}</div>
        </div>
      </div>
      <div>
        <div className={classes.price}> {price.toFixed(1)} som</div>
      </div>
    </div>
  );
};

export default HouseplantPreview;
