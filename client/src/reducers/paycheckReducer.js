import { ADD_PAYCHECK, GET_CURRENT_PAYCHECKS } from "../actions/types";

const initialState = {
  paychecks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PAYCHECK:
      return action.payload;
    case GET_CURRENT_PAYCHECKS:
      return action.payload;
    default:
      return state;
  }
}
