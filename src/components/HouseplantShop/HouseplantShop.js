import HouseplantControls from "./HouseplantControls/HouseplantControls";
import HouseplantPreview from "./HouseplantPreview/HouseplantPreview";
import classes from "./HouseplantShop.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import React from "react"
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";

const HouseplantShop = ({history}) => {
    const dispatch = useDispatch();
    const pots = useSelector(state => state.pots);
    const price = useSelector(state => state.price);
    const [ordering , setOrdering] = useState(false);
    
    
    useEffect(() => dispatch(load()), []);
    
    // function loadDefaults() {
    //     axios.get('https://builder-b9129-default-rtdb.firebaseio.com/default.json')
    //         .then((response) => {
    //             setPrice(response.data.price);
    //             setPots(response.data.pots);
    //         });
    // }

    


    function startOrdering() {
        setOrdering(true)
    }
    function stopOrdering() {
        setOrdering(false)
    }
    function finishOrdering() {
        axios.post('https://builder-b9129-default-rtdb.firebaseio.com/default.json' ,{
            pots:pots,
            price:price,
            address:"fadfda",
            phone:"0 777 777 777",
            name:"Joah"
        })
        .then(()=> setOrdering(false));
        setOrdering(false);
        // loadDefaults(false);
        history.push('/checkout');
    }
    return (
        <div>
            <h1 className={classes.H1}> Houseplant Shop </h1>
            <div className={classes.HouseplantShop}>
                <HouseplantPreview pots={pots} price={price} />
                <HouseplantControls pots={pots} startOrdering={startOrdering} />
                <Modal show={ordering} cancel={stopOrdering}>
                    <OrderSummary pots={pots} price={price} />
                    <Button onClick={finishOrdering} green>Checkout</Button>
                    <Button onClick={stopOrdering}>Cancel</Button>
                </Modal>
            </div>
        </div>
    );
}

export default HouseplantShop;