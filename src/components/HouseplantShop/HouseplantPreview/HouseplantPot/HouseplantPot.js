import classes from "./HouseplantPot.module.css";

import alocasia from "../../../../images/alocasia.svg";
import begonia from "../../../../images/begonia.svg";
import bonsai from "../../../../images/bonsai.svg";
import calathea from "../../../../images/calathea.svg";
import cyclamen from "../../../../images/cyclamen.svg";
import dracaena from "../../../../images/dracaena.svg";
const HouseplantPot = ({ type }) => {
  const types = {
    alocasia: {
      backgroundImage: `url(${alocasia})`,
      width: "75px",
      height: "75px",
    },
    begonia: {
      backgroundImage: `url(${begonia})`,
      width: "75px",
      height: "75px",
    },
    bonsai: {
      backgroundImage: `url(${bonsai})`,
      width: "75px",
      height: "75px",
    },
    calathea: {
      backgroundImage: `url(${calathea})`,
      width: "75px",
      height: "75px",
    },
    cyclamen: {
      backgroundImage: `url(${cyclamen})`,
      width: "75px",
      height: "75px",
    },
    dracaena: {
      backgroundImage: `url(${dracaena})`,
      width: "75px",
      height: "75px",
    },
  };
  return <div className={classes.HouseplantPot} style={types[type]}></div>;
};

export default HouseplantPot;
