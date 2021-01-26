import {
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  UPDATE_NAME,
  UPDATE_PICTURE,
} from "../types";
const authReducer = (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload,
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case SIGNUP_FAIL:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
        validation: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        validation: {},
      };
    case UPDATE_NAME:
      return {
        ...state,
        user: action.payload,
      };
    case UPDATE_PICTURE:
      return {
        ...state,
        user: { ...state.user, picture: action.payload },
      };
    default:
      return state;
  }
};

export default authReducer;
