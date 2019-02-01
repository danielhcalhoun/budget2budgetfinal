import {
  DELETE_EXPENSE,
  GET_CURRENT_EXPENSES_ERROR,
  GET_CURRENT_EXPENSES_PENDING,
  GET_CURRENT_EXPENSES,
  ADD_EXPENSE,
  EDIT_EXPENSE,
  SET_CURRENT_EXPENSE
} from "../actions/types";

const initialState = {
  expenses: [],
  loading: false,
  currentExpense: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case EDIT_EXPENSE:
      return {
        ...state
      };
    case SET_CURRENT_EXPENSE:
      return {
        ...state,
        currentExpense: action.payload
      };
    case ADD_EXPENSE:
      return {
        ...state
      };
    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(
          (item, index) => action.payload !== index
        )
      };
    case GET_CURRENT_EXPENSES_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_CURRENT_EXPENSES:
      return {
        ...state,
        expenses: action.payload,
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
