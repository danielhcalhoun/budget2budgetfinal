import {
  ADD_PAYCHECK,
  DELETE_PAYCHECK,
  EDIT_PAYCHECK,
  GET_CURRENT_EXPENSES_ERROR,
  GET_CURRENT_EXPENSES_PENDING,
  GET_CURRENT_PAYCHECKS,
  SET_CURRENT_PAYCHECK
} from "../actions/types";

const initialState = {
  paychecks: [],
  loading: false,
  currentPaycheck: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EDIT_PAYCHECK:
      return {
        ...state,
        loading: true
      };
    case ADD_PAYCHECK:
      return {
        ...state,
        loading: true
      };
    case SET_CURRENT_PAYCHECK:
      return {
        ...state,
        currentPaycheck: action.payload
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
