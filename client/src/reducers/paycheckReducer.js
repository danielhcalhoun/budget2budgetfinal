import { DELETE_PAYCHECK, GET_CURRENT_PAYCHECKS } from "../actions/types";

const initialState = {
  paychecks: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    // case ADD_PAYCHECK:
    //   return state.push(action.payload);
    case DELETE_PAYCHECK:
      return {
        paychecks: state.paychecks.filter(
          (item, index) => action.payload !== index
        ),
        loading: false
      };
    case GET_CURRENT_PAYCHECKS:
      return {
        paychecks: action.payload,
        loading: true
      };
    default:
      return state;
  }
}
