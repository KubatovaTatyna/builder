import axios from "../../axios";
import { ADD_POT, REMOVE_POT, SET_POTS } from "./types";

export const add = (pot) => ({
  type: ADD_POT,
  pot: pot,
});

export const remove = (pot) => ({
  type: REMOVE_POT,
  pot: pot,
});

export const set = (data) => ({
  type: SET_POTS,
  data: data,
});

export const load = () => {
  return (dispatch) =>
    axios.get("/default.json").then((response) => dispatch(set(response.data)));
};
