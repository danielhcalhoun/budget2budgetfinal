import { CREATE_PROFILE, GET_PROFILE_PENDING, GET_PROFILE } from "../actions/types";

const initialState = {
  profile: null,
  profiles: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case CREATE_PROFILE:
      return {
        ...state
      };
    default:
      return state;
  }
}
