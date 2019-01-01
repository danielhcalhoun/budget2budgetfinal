import { ADD_PAYCHECK } from "../actions/types";

const initialState = {
  paychecks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PAYCHECK:
      return {
        ...state,
        paychecks: [...state.paychecks, action.payload]
      };
    default:
      return state;
  }
}
