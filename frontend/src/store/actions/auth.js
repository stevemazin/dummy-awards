import axios from "axios";
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  ACTIVATION_SUCCESS,
  ACTIVATION_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAIL,
  AUTHENTICATED_FAIL,
  AUTHENTICATED_SUCCESS,
  LOGOUT,
  PASSWORD_RESET_CONFIRM_SUCCESS,
  PASSWORD_RESET_CONFIRM_FAIL,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_SUCCESS,
  GOOGLE_AUTH_SUCCESS,
  GOOGLE_AUTH_FAIL,
} from "./actionTypes";
import { setShowLoader, showAuthMessage, showPopupMessage } from "./ui";

// Load user data if they successfuly sign in
export const loadUser = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
    };

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/users/me/`,

        config
      );

      dispatch({
        type: USER_LOADED_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};

// Authenticate using google
export const googleAuthenticate = (state, code) => async (dispatch) => {
  if (state && code && !localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    };

    const details = {
      state: state,
      code: code,
    };

    const formBody = Object.keys(details)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(details[key])
      )
      .join("&");

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?${formBody}`,
        config
      );

      dispatch({
        type: GOOGLE_AUTH_SUCCESS,
        payload: res.data,
      });

      dispatch(loadUser());
    } catch (err) {
      dispatch({
        type: GOOGLE_AUTH_FAIL,
      });
    }
  }
};

// Check if a user is authenticated
export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem("access")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ token: localStorage.getItem("access") });
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/jwt/verify/`,
        body,
        config
      );

      if (res.data.code !== "token_not_valid") {
        dispatch({
          type: AUTHENTICATED_SUCCESS,
        });
      } else {
        dispatch({
          type: AUTHENTICATED_FAIL,
        });
      }
    } catch (err) {
      dispatch({
        type: AUTHENTICATED_FAIL,
      });
    }
  } else {
    dispatch({
      type: AUTHENTICATED_FAIL,
    });
  }
};

// Login a user
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/jwt/create/`,
      body,
      config
    );

    if (res.data.status === 401) {
      console.log(res);
    }

    console.log(res);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err.response.data.detail);
    dispatch(showAuthMessage(true, err.response.data.detail));
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Sign up a user
export const signUp =
  (first_name, last_name, email, password, re_password) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      first_name,
      last_name,
      email,
      password,
      re_password,
    });

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/users/`,
        body,
        config
      );
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: res.data,
      });
      if (res.status === 201) {
        dispatch(
          showPopupMessage(
            true,
            "Head on to your email & verify the account..."
          )
        );
      }
    } catch (err) {
      if (err.response.data.email) {
        dispatch(showAuthMessage(true, err.response.data.email[0]));
      }
      if (err.response.data.password) {
        dispatch(showAuthMessage(true, err.response.data.password[0]));
      }

      dispatch(setShowLoader(false));
      dispatch({
        type: SIGN_UP_FAIL,
      });
    }
  };

// Verify/activate a user
export const activateUser = (uid, token) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ uid, token });

  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/activation/`,
      body,
      config
    );

    dispatch({
      type: ACTIVATION_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: ACTIVATION_FAIL,
    });
  }
};

// Reset the password
export const resetPassword = (email) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email });

  try {
    await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/users/reset_password/`,
      body,
      config
    );

    dispatch({
      type: PASSWORD_RESET_SUCCESS,
    });
  } catch (err) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
    });
  }
};

// Confirm password reset
export const resetPassConfirm =
  (uid, token, new_password, re_new_password) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = JSON.stringify({
      uid,
      token,
      new_password,
      re_new_password,
    });

    try {
      await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`,
        body,
        config
      );

      dispatch({
        type: PASSWORD_RESET_CONFIRM_SUCCESS,
      });
    } catch (err) {
      console.log("Error");
      console.log(err);

      dispatch({
        type: PASSWORD_RESET_CONFIRM_FAIL,
      });
    }
  };

// Log a user out
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
