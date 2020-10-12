import { beginApiCall, apiCallError } from "../actions/apiStatusActions";
import * as userApi from "../../api/userApi";

export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const AUTHENTICATE_USER_REQUEST = "AUTHENTICATE_USER_REQUEST";
export const AUTHENTICATE_USER_SUCCESS = "AUTHENTICATE_USER_SUCCESS";
export const AUTHENTICATE_USER_ERROR = "AUTHENTICATE_USER_ERROR";

// Get Users

function getUsersRequest(users) {
  return {
    type: GET_USERS_REQUEST,
    users,
  };
}

function getUsersSuccess(users) {
  return {
    type: GET_USERS_SUCCESS,
    users,
  };
}

function getUsersError(error) {
  return {
    type: GET_USERS_ERROR,
    error,
  };
}

// Register New User

function registerUserRequest(user) {
  return {
    type: REGISTER_USER_REQUEST,
    user,
  };
}

function registerUserSuccess(user) {
  return {
    type: REGISTER_USER_SUCCESS,
    user,
  };
}

function registerUserError(error) {
  return {
    type: REGISTER_USER_ERROR,
    error,
  };
}
// Update Existing User

function updateUserRequest(user) {
  return {
    type: UPDATE_USER_REQUEST,
    user,
  };
}

function updateUserSuccess(user) {
  return {
    type: UPDATE_USER_SUCCESS,
    user,
  };
}

function updateUserError(error) {
  return {
    type: UPDATE_USER_ERROR,
    error,
  };
}
// Authenticate Existing User

function authenticateUserRequest(user) {
  return {
    type: AUTHENTICATE_USER_REQUEST,
    user,
  };
}

function authenticateUserSuccess(data) {
  return {
    type: AUTHENTICATE_USER_SUCCESS,
    ...data,
  };
}

function authenticateUserError(error) {
  return {
    type: AUTHENTICATE_USER_ERROR,
    error,
  };
}

export function getAll() {
  return function (dispatch) {
    dispatch(getUsersRequest());
    dispatch(beginApiCall());

    return userApi
      .getAll()
      .then((response) => {
        dispatch(getUsersSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getUsersError(error));
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function save(user) {
  return function (dispatch, getState) {
    user.id ? dispatch(registerUserRequest()) : dispatch(updateUserRequest());
    dispatch(beginApiCall());

    return userApi
      .save(user)
      .then((savedUser) => {
        user.id
          ? dispatch(registerUserSuccess(savedUser))
          : dispatch(updateUserSuccess(savedUser));
      })
      .catch((error) => {
        user.id
          ? dispatch(registerUserError(error))
          : dispatch(updateUserError(error));
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function authenticate(user) {
  return function (dispatch) {
    dispatch(authenticateUserRequest());
    dispatch(beginApiCall());

    return userApi
      .authenticate(user)
      .then((response) => {
        dispatch(authenticateUserSuccess({ ...response.data }));
      })
      .catch((error) => {
        dispatch(authenticateUserError(error));
        dispatch(apiCallError());
        throw error;
      });
  };
}
