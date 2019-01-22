import {
  DELETE_EXPENSE,
  GET_CURRENT_EXPENSES_ERROR,
  GET_CURRENT_EXPENSES_PENDING,
  GET_CURRENT_EXPENSES,
  ADD_EXPENSE
} from "../actions/types";

const initialState = {
  expenses: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload]
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
