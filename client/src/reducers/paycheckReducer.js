import {
  ADD_PAYCHECK,
  DELETE_PAYCHECK,
  GET_CURRENT_PAYCHECKS
} from "../actions/types";

const initialState = {
  paychecks: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PAYCHECK:
      return state.push(action.payload);
    case DELETE_PAYCHECK:
      return state.filter((item, index) => action.payload !== index);
    case GET_CURRENT_PAYCHECKS:
      return action.payload;
    default:
      return state;
  }
}
