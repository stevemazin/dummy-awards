import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  posts: null,
  msg: null,
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_LATEST_POSTS:
      console.log("Fetching posts...");
      return updateObject(state, { posts: payload });
    case actionTypes.FETCH_LATEST_POSTS_FAIL:
      console.log("Error fetching posts...");
      return updateObject(state, { msg: payload });

    default:
      return state;
  }
};

export default blogReducer;
