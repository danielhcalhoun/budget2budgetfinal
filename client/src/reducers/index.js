import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import providerReducer from "./providerReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import navigateReducer from "./navigateReducer";

export default combineReducers({
  form: reduxForm,
  expenses: providerReducer,
  login: loginReducer,
  register: registerReducer,
  route: navigateReducer
});
