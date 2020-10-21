import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_USER_SUCCESS,
  AUTHENTICATE_USER_REQUEST,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_ERROR,
  LOGOUT_USER,
} from "../actions/userActions";

const INITIAL_STATE = {
  loading: false,
  hasError: false,
  error: null,
  loggedIn: false,
  currentUser: null,
  users: [],
};

export default function userRecuder(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasError: false,
        users: action.users,
      };

    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
        users: action.users,
        error: action.error,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.user,
      };

    case AUTHENTICATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        hasError: false,
        loggedIn: false,
        currentUser: action.currentUser,
      };

    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        hasError: false,
        loggedIn: true,
        currentUser: action.currentUser,
      };

    case AUTHENTICATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
        loggedIn: false,
        currentUser: null,
      };

    case LOGOUT_USER:
      return {
        ...state,
        loggedIn: false,
        currentUser: null,
      };

    default:
      return state;
  }
}
