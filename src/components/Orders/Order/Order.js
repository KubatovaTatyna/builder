import classes from "./Order.module.css";

const Order = ({ name, phone, address, pots, price }) => {
  const outputPots = Object.keys(pots).map((pot) => (
   
      <li>{pot} - {pots[pot]}</li>
    
  ));
  console.log(outputPots);
  return (
    <div className={classes.Order}>
      <div>
        <span className={classes.strong}>Name:</span> {name}
        <hr/>
        <span className={classes.strong}>Phone: </span>{phone} 
        <br/>
        <span className={classes.strong}>Address: </span>{address} 
      </div>
      <div><span className={classes.strong}>Orders:</span><ul> {outputPots}</ul></div>
      <strong><span className={classes.strong}>Price:</span></strong>{price}
    </div>
  );
};

export default Order;
