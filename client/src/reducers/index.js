import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import providerReducer from "./providerReducer";

export default combineReducers({
  form: reduxForm,
  providers: providerReducer
});
