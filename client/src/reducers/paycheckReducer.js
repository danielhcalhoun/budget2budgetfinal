import { ADD_PAYCHECK } from "../actions/types";

const initialState = {
  paychecks: [],
  currentPaycheck: {
    date: {},
    amount: {},
    recurring: false,
    recur: {}
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PAYCHECK:
      return {
        ...state,
        paychecks: [...state.paychecks, action.payload],
        currentPaycheck: {}
      };
    default:
      return state;
  }
}
