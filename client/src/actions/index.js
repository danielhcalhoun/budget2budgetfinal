import axios from "axios";
import { FETCH_PROVIDERS } from "./types";

export const fetchProviders = () => async dispatch => {
  const res = await axios.get("/api/providers/all");

  dispatch({ type: FETCH_PROVIDERS, payload: res.data });
};
