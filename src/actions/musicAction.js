import axios from "axios";

import { hit_url } from "../api";

export const loadMusic = (channel) => async (dispatch) => {
  const songData = await axios
    .get(hit_url(channel))
    .catch((e) => console.log(e));

  dispatch({
    type: "FETCH_MUSIC",
    payload: {
      song: songData.data.data,
    },
  });
};
