import axios from "axios";

import { beginApiCall, apiCallError } from "../actions/apiStatusActions";

import * as userApi from "../../api/userApi";

export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

export const AUTHENTICATE_USER_REQUEST = "AUTHENTICATE_USER_REQUEST";
export const AUTHENTICATE_USER_SUCCESS = "AUTHENTICATE_USER_SUCCESS";
export const AUTHENTICATE_USER_ERROR = "AUTHENTICATE_USER_ERROR";

export const LOGOUT_USER = "LOGOUT_USER";

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

// Get User

function getUserRequest(user) {
  return {
    type: GET_USER_REQUEST,
    user,
  };
}

function getUserSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    user,
  };
}

function getUserError(error) {
  return {
    type: GET_USER_ERROR,
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
    currentUser: { ...data },
  };
}

function authenticateUserError(error) {
  return {
    type: AUTHENTICATE_USER_ERROR,
    error,
  };
}

function logoutUser() {
  return { type: LOGOUT_USER };
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

export function get(id) {
  return function (dispatch) {
    dispatch(getUserRequest());
    dispatch(beginApiCall());

    return userApi
      .get(id)
      .then((response) => {
        dispatch(getUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getUserError(error));
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

export function initialAuthentication() {
  return function (dispatch) {
    try {
      const user = JSON.parse(window.localStorage.getItem("user"));

      if (user && user.token && user.username) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + user.token;
        dispatch(authenticateUserSuccess(user));
      }
    } catch {}
  };
}

export function authenticate(user) {
  return function (dispatch) {
    dispatch(authenticateUserRequest());
    dispatch(beginApiCall());

    return userApi
      .authenticate(user)
      .then((response) => {
        const data = { username: user.username, ...response.data };
        window.localStorage.setItem("user", JSON.stringify(data));
        axios.defaults.headers.common["Authorization"] = "Bearer " + data.token;
        dispatch(authenticateUserSuccess(data));
      })
      .catch((error) => {
        dispatch(authenticateUserError(error));
        dispatch(apiCallError());
        throw error.request.status;
      });
  };
}

export function logout() {
  return function (dispatch) {
    window.localStorage.removeItem("user");
    dispatch(logoutUser());
  };
}
