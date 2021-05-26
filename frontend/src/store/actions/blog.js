import * as actionTypes from "./actionTypes";
import axios from "axios";

// actionCreators
export const fetchLatestPosts = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  };

  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_URL}/posts/`,
      config
    );

    dispatch({
      type: actionTypes.FETCH_LATEST_POSTS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: actionTypes.FETCH_LATEST_POSTS_FAIL,
      msg: "Error fetching Posts",
    });
  }
};
