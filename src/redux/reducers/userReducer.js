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
  GET_PERMISSIONS_REQUEST,
  GET_PERMISSIONS_SUCCESS,
  GET_PERMISSIONS_ERROR,
  REMOVE_USER_REQUEST,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_ERROR,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  AUTHENTICATE_USER_REQUEST,
  AUTHENTICATE_USER_SUCCESS,
  AUTHENTICATE_USER_ERROR,
  LOGOUT_USER,
  REFRESH_TOKEN_REQUEST,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_ERROR,
} from "../actions/userActions";

const INITIAL_STATE = {
  loading: false,
  hasError: false,
  error: null,
  loggedIn: false,
  currentUser: null,
  users: [],
  groups: [],
  permissions: [],
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
        users: state.users,
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
        groups: state.groups,
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
        users: state.users,
        error: action.error,
      };

    case GET_PERMISSIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_PERMISSIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        hasError: false,
        permissions: action.permissions,
      };

    case GET_PERMISSIONS_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
        permissions: state.permissions,
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

    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        saveSuccessfull: true,
        loading: false,
        hasError: false,
      };

    case UPDATE_USER_ERROR:
      return {
        ...state,
        saveSuccessfull: false,
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

    case REFRESH_TOKEN_REQUEST:
      return {
        ...state,
      };

    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };

    case REFRESH_TOKEN_ERROR:
      return {
        ...state,
        hasError: true,
        loggedIn: false,
      };

    default:
      return state;
  }
}
