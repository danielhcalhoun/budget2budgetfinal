import { COMBINE_EXPENSES, COMBINE_PAYCHECKS } from "../actions/types";

const initialState = {
  totalPaychecks: 0,
  totalExpenses: 0,
  percentLeft: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case COMBINE_PAYCHECKS:
      return (state = {
        ...state,
        totalPaychecks: action.payload,
        percentLeft:
          (action.payload - state.totalExpenses) / action.payload * 100,
        amountLeft: action.payload - state.totalExpenses
      });
    case COMBINE_EXPENSES:
      return (state = {
        ...state,
        totalExpenses: action.payload,
        percentLeft:
          (state.totalPaychecks - action.payload) / state.totalPaychecks * 100,
        amountLeft: state.totalPaychecks - action.payload
      });
    default:
      return state;
  }
}
