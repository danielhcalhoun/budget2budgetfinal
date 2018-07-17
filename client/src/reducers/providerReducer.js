import { FETCH_PROVIDERS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PROVIDERS:
      return action.payload;
    default:
      return state;
  }
}
