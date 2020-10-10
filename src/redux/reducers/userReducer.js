import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from "../actions/userActions";
import { isRequest, isSuccess, isError } from "../helpers/helpers";

const INITIAL_STATE = {
  loading: false,
  hasError: 0,
  error: null,
  users: [],
  currentUser: null,
};

export default function userRecuder(state = INITIAL_STATE, action) {
  if (isRequest(type))
    return {
      ...state,
      loading: true,
    };

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

    case AUTHENTICATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        hasError: false,
        currentUser: action.currentUser,
      };

    default:
      return state;
  }
}
