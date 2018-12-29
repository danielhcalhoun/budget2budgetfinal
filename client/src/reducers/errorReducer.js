import { GET_ERRORS } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload
      };
    default:
      return state;
  }
}
