import HouseplantPreview from "../HouseplantShop/HouseplantPreview/HouseplantPreview";
import classes from "./Checkout.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import axios from "../../axios";
import { useSelector } from "react-redux";
import withAxios from "../withAxios";

const Checkout = ({ history }) => {

    const pots = useSelector(state => state.builder.pots);
    const price = useSelector(state => state.builder.price);
    
    function cancelCallback() {
        history.replace('/');
    }

    function submitCallback(event) {
        const data = new FormData(event.target);
    
        axios.post('/orders.json', {
          name: data.get('name'),
          address: data.get('address'),
          phone: data.get('phone'),
          pots: pots,
          price: price,
        }).then(response => {
          history.replace('/');
        });
    
        event.preventDefault();
    }

    return ( 
        <div className={classes.Checkout}>
            <HouseplantPreview pots={pots} price={price} />
            <CheckoutForm
                cancelCallback={cancelCallback}
                submitCallback={submitCallback} />
        </div>
    );
}

export default withAxios(Checkout , axios)  ;