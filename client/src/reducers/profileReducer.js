import { CREATE_PROFILE } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case CREATE_PROFILE:
      return {
        ...state
      };
    default:
      return state;
  }
}
