import HouseplantControls from "./HouseplantControls/HouseplantControls";
import HouseplantPreview from "./HouseplantPreview/HouseplantPreview";
import classes from "./HouseplantShop.module.css";
import { useEffect, useState } from "react";
import React from "react";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";
import withAxios from "../withAxios";
import axios from "axios";

const HouseplantShop = ({ history }) => {
  const dispatch = useDispatch();
  const pots = useSelector((state) => state.builder.pots);
  const price = useSelector((state) => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    history.push("/checkout");
  }
  return (
    <div>
      <h1 className={classes.H1}> Houseplant Shop </h1>
      <div className={classes.HouseplantShop}>
        <HouseplantPreview pots={pots} price={price} />
        <HouseplantControls pots={pots} startOrdering={startOrdering} />
        <Modal show={ordering} cancel={stopOrdering}>
          <OrderSummary pots={pots} price={price} />
          <Button onClick={finishOrdering} green="green">
            Checkout
          </Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
      </div>
    </div>
  );
};

export default withAxios(HouseplantShop, axios);
