import HouseplantControls from "./HouseplantControls/HouseplantControls";
import HouseplantPreview from "./HouseplantPreview/HouseplantPreview";
import classes from "./HouseplantShop.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react"

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
    const [pots, setPots] = useState([]);
    useEffect(() => {
        axios.get('https://builder-b9129-default-rtdb.firebaseio.com/pots.json')
            .then((response) => {
                const pots = response.data;
                setPots(pots);
            });
    }, []);
    // useEffect(() => {
    //     axios.get("https://builder-b9129-default-rtdb.firebaseio.com/price.json")
    //         .then((response) => {
    //             const prices = response.data;
    //             setPrice(prices)
    //         })
    // }, [])
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
    return (
        <div>
            <h1 className={classes.H1}> Houseplant Shop </h1>
            <div className={classes.HouseplantShop}>
                <HouseplantPreview pots={pots} price={price} />
                <HouseplantControls pots={pots} addPot={addPot} removePot={removePot} />
            </div>
        </div>
    );
}

export default HouseplantShop;