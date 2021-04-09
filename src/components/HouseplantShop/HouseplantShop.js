import HouseplantControls from "./HouseplantControls/HouseplantControls";
import HouseplantPreview from "./HouseplantPreview/HouseplantPreview";
import classes from "./HouseplantShop.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react"
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";

const HouseplantShop = () => {
    const prices = {
        alocasia: 150,
        bonsai: 100,
        begonia:140,
        cyclamen:200,
        calathea:100,
        dracaena:80
    }
    const [price, setPrice] = useState(0);
    const [pots, setPots] = useState({});
    const [ordering , setOrdering] = useState(false)
    useEffect(() => {
        axios.get('https://builder-b9129-default-rtdb.firebaseio.com/default.json')
            .then((response) => {
                setPrice(response.data.price);
                setPots(response.data.pots);
            });
    }, []);
    
    function addPot(type) {
        const newPots = { ...pots };
        newPots[type]++;
        setPots(newPots);
        setPrice(price + prices[type]);
    };

    function removePot(type) {
        if (pots[type]) {
            const newPots = { ...pots };
            newPots[type]--;
            setPots(newPots);
            setPrice(price - prices[type]);
        }
    }
    function startOrdering() {
        setOrdering(true)
    }
    function stopOrdering() {
        setOrdering(false)
    }
    return (
        <div>
            <h1 className={classes.H1}> Houseplant Shop </h1>
            <div className={classes.HouseplantShop}>
                <HouseplantPreview pots={pots} price={price} />
                <HouseplantControls pots={pots} addPot={addPot} removePot={removePot} startOrdering={startOrdering} />
                <Modal show={ordering} cancel={stopOrdering}><OrderSummary pots={pots} price={price} /></Modal>
            </div>
        </div>
    );
}

export default HouseplantShop;