import { CLOSE_MODAL, OPEN_MODAL } from "../actions/types";

const initialState = {
  modalOpen: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case CLOSE_MODAL:
      return {
        ...state,
        modalOpen: false
      };
    case OPEN_MODAL:
      return {
        ...state,
        modalOpen: true
      };
    default:
      return {
        ...state
      };
  }
}
