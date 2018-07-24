import { TEST_USER } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case TEST_USER:
      return action.payload;
    default:
      return state;
  }
}
