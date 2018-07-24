import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import providerReducer from "./providerReducer";
import loginReducer from "./loginReducer";
import registerReducer from "./registerReducer";
import testReducer from "./testReducer";

export default combineReducers({
  form: reduxForm,
  providers: providerReducer,
  login: loginReducer,
  register: registerReducer,
  test: testReducer
});
