import {
  ADD_PAYCHECK,
  DELETE_PAYCHECK,
  GET_CURRENT_EXPENSES_ERROR,
  GET_CURRENT_EXPENSES_PENDING,
  GET_CURRENT_PAYCHECKS
} from "../actions/types";

const initialState = {
  paychecks: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_PAYCHECK:
      return {
        ...state,
        loading: true
      };
    case DELETE_PAYCHECK:
      return {
        ...state,
        paychecks: state.paychecks.filter(
          (item, index) => action.payload !== index
        )
      };
    case GET_CURRENT_EXPENSES_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_CURRENT_PAYCHECKS:
      return {
        ...state,
        paychecks: action.payload,
        loading: false
      };
    case GET_CURRENT_EXPENSES_ERROR:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
