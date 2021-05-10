import { ADD_POT, REMOVE_POT, SET_POTS } from "../actions/types";

const initialState = {
  pots: {},
  price: 0,
};

const prices = {
  alocasia: 150,
  bonsai: 100,
  begonia: 140,
  cyclamen: 200,
  calathea: 100,
  dracaena: 80,
};

const builder = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case ADD_POT:
      newState.pots[action.pot]++;
      newState.price += prices[action.pot];
      break;
    case REMOVE_POT:
      newState.pots[action.pot]--;
      newState.price -= prices[action.pot];
      break;
    case SET_POTS:
      newState.pots = action.data.pots;
      newState.price = action.data.price;
      break;

    default:
      break;
  }

  return newState;
};

export default builder;
