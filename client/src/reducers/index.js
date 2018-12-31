import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import navigateReducer from "./navigateReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import paycheckReducer from "./paycheckReducer";
import expenseReducer from "./expenseReducer";

export default combineReducers({
  form: reduxForm,
  login: loginReducer,
  register: registerReducer,
  route: navigateReducer,
  auth: authReducer,
  errors: errorReducer,
  paychecks: paycheckReducer,
  expenses: expenseReducer
});
