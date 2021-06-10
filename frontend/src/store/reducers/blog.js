import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  posts: null,
  msg: null,
  singlePostInView: null,
};

const blogReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actionTypes.FETCH_LATEST_POSTS:
      return updateObject(state, { posts: payload });
    case actionTypes.FETCH_LATEST_POSTS_FAIL:
      return updateObject(state, { msg: payload });
    case actionTypes.GET_SINGLE_POST_SUCCESS:
      return updateObject(state, { singlePostInView: payload });
    case actionTypes.GET_SINGLE_POST_FAIL:
      return updateObject(state, { singlePostInView: null });
    default:
      return state;
  }
};

export default blogReducer;
