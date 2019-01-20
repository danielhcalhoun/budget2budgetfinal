import { COMBINE_EXPENSES, COMBINE_PAYCHECKS } from "../actions/types";

const initialState = {
  totalPaychecks: 0,
  totalExpenses: 0,
  whatsLeftOver: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case COMBINE_PAYCHECKS:
      return (state = {
        ...state,
        totalPaychecks: action.payload,
        whatsLeftOver:
          (action.payload - state.totalExpenses) / action.payload * 100
      });
    case COMBINE_EXPENSES:
      return (state = {
        ...state,
        totalExpenses: action.payload,
        whatsLeftOver:
          (state.totalPaychecks - action.payload) / state.totalPaychecks * 100
      });
    default:
      return state;
  }
}
