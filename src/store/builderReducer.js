const initialState = {
  pots :{
        alocasia: 2,
        bonsai: 2,
        begonia:2,
        cyclamen:2,
        calathea:2,
        dracaena:2
  },
  price:800,
};
const prices = {
  alocasia: 150,
  bonsai: 100,
  begonia:140,
  cyclamen:200,
  calathea:100,
  dracaena:80
}
const builderReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "ADD_POT":
      newState.pots[action.pot]++;
      newState.price += prices[action.pot];
      break;
    case "REMOVE_POT":
      newState.pots[action.pot]--;
      newState.price -= prices[action.pot];
      break;

    default:
      break;
  }

  return newState;
}

export default builderReducer;