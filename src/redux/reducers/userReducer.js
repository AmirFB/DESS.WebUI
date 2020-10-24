import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  GET_GROUPS_REQUEST,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_ERROR,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  REMOVE_USER_REQUEST,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_ERROR,
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
  user: {
    firstName: "",
    lastName: "",
    userName: "",
    password: "",
    confirmPassword: "",
  },
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

    case GET_GROUPS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_GROUPS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasError: false,
        groups: action.groups,
      };

    case GET_GROUPS_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
        groups: action.groups,
        error: action.error,
      };

    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        hasError: false,
        user: action.user,
      };

    case GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
        users: action.users,
        error: action.error,
      };

    case REMOVE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REMOVE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        hasError: false,
      };

    case REMOVE_USER_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
        error: action.error,
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
