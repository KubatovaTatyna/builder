
import classes from "./Checkout.module.css";
import HouseplantPreview from "../HouseplantShop/HouseplantPreview/HouseplantPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import axios from "axios";

const Checkout = ({ history }) => {
    function cancelCallback() {
      history.replace('/');
    }
    function submitCallback(event) {
      const data = new FormData(event.target);
  
      axios.post('https://builder-b9129-default-rtdb.firebaseio.com/orders.json', {
        name: data.get('name'),
        address: data.get('address'),
        phone: data.get('phone'),
        pots: {
          alocasia: 10,
          bonsai: 10,
          begonia: 10,
          dracaena: 10,
          cyclmen: 10,
          calathea: 10,
        },
        price: 100,
      }).then(response => {
        history.replace('/');
      });
  
      event.preventDefault();
    }
    return (
      <div className={classes.Checkout}>
      <HouseplantPreview pots={{
        alocasia: 5, 
        bonsai: 1,
        begonia: 5,
      }} price={150} />
      <CheckoutForm cancelCallback={cancelCallback} submitCallback={submitCallback}/>
    </div>
      );
    }

export default Checkout;