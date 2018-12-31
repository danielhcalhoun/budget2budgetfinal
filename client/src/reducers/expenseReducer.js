import { ADD_EXPENSE } from "../actions/types";

const initialState = {
  expenses: [],
  currentExpense: {
    date: {},
    amount: {},
    recurring: false,
    recur: {}
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_EXPENSE:
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
        currentExpense: {}
      };
    default:
      return state;
  }
}
