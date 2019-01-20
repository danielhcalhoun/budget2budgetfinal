import { DELETE_EXPENSE, GET_CURRENT_EXPENSES } from "../actions/types";

const initialState = {
  expenses: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case DELETE_EXPENSE:
      return state.filter((item, index) => action.payload !== index);
    case GET_CURRENT_EXPENSES:
      return action.payload;
    default:
      return state;
  }
}
