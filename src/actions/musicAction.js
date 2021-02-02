import axios from "axios";

import { hit_url } from "../api";

export const loadMusic = () => async (dispatch) => {
  const hitData = await axios.get(hit_url());

  dispatch({
    type: "FETCH_MUSIC",
    payload: {
      hit: hitData.data.data,
    },
  });
};
