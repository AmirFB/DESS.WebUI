import { beginApiCall, apiCallError } from "../actions/apiStatusActions";
import * as siteApi from "../../api/siteApi";

export const GET_SITES_REQUEST = "GET_SITES_REQUEST";
export const GET_SITES_SUCCESS = "GET_SITES_SUCCESS";
export const GET_SITES_ERROR = "GET_SITES_ERROR";

export const GET_ALL_LOG_REQUEST = "GET_ALL_LOG_REQUEST";
export const GET_ALL_LOG_SUCCESS = "GET_ALL_LOG_SUCCESS";
export const GET_ALL_LOG_ERROR = "GET_ALL_LOG_ERROR";

export const GET_LOG_REQUEST = "GET_LOG_REQUEST";
export const GET_LOG_SUCCESS = "GET_LOG_SUCCESS";
export const GET_LOG_ERROR = "GET_LOG_ERROR";

export const GET_GROUPS_REQUEST = "GET_SITE_GROUPS_REQUEST";
export const GET_GROUPS_SUCCESS = "GET_SITE_GROUPS_SUCCESS";
export const GET_GROUPS_ERROR = "GET_SITE_GROUPS_ERROR";

export const ADD_SITE_REQUEST = "ADD_SITE_REQUEST";
export const ADD_SITE_SUCCESS = "ADD_SITE_SUCCESS";
export const ADD_SITE_ERROR = "ADD_SITE_ERROR";

export const REMOVE_SITE_REQUEST = "REMOVE_SITE_REQUEST";
export const REMOVE_SITE_SUCCESS = "REMOVE_SITE_SUCCESS";
export const REMOVE_SITE_ERROR = "REMOVE_SITE_ERROR";

export const UPDATE_SITE_REQUEST = "UPDATE_SITE_REQUEST";
export const UPDATE_SITE_SUCCESS = "UPDATE_SITE_SUCCESS";
export const UPDATE_SITE_ERROR = "UPDATE_SITE_ERROR";
export const SAVE_SITE_DONE = "SAVE_SITE_DONE";

export const UPDATE_STATUS = "UPDATE_STATUS";

// Get Sites

function getSitesRequest(sites) {
  return {
    type: GET_SITES_REQUEST,
    sites,
  };
}

function getSitesSuccess(sites) {
  return {
    type: GET_SITES_SUCCESS,
    sites,
  };
}

function getSitesError(error) {
  return {
    type: GET_SITES_ERROR,
    error,
  };
}

//Get Logs

function getAllLogRequest(logs) {
  return {
    type: GET_ALL_LOG_REQUEST,
    logs,
  };
}

function getAllLogSuccess(logs) {
  return {
    type: GET_ALL_LOG_SUCCESS,
    logs,
  };
}

function getAllLogError(error) {
  return {
    type: GET_ALL_LOG_ERROR,
    error,
  };
}

//Get Log

function getLogRequest(filter) {
  return {
    type: GET_LOG_REQUEST,
    filter,
  };
}

function getLogSuccess(log) {
  return {
    type: GET_LOG_SUCCESS,
    log,
  };
}

function getLogError(error) {
  return {
    type: GET_LOG_ERROR,
    error,
  };
}

// GET GROUP

function getGroupsRequest() {
  return {
    type: GET_GROUPS_REQUEST,
  };
}

function getGroupsSuccess(groups) {
  return {
    type: GET_GROUPS_SUCCESS,
    groups,
  };
}

function getGroupsError(error) {
  return {
    type: GET_GROUPS_ERROR,
    error,
  };
}

// Add New Site

function addSiteRequest(site) {
  return {
    type: ADD_SITE_REQUEST,
    site,
  };
}

function addSiteSuccess(site) {
  return {
    type: ADD_SITE_SUCCESS,
    site,
  };
}

function addSiteError(error) {
  return {
    type: ADD_SITE_ERROR,
    error,
  };
}

// REMOVE Site

function removeSiteRequest(id) {
  return {
    type: REMOVE_SITE_REQUEST,
  };
}

function removeSiteSuccess(id) {
  return {
    type: REMOVE_SITE_SUCCESS,
  };
}

function removeSiteError(error) {
  return {
    type: REMOVE_SITE_ERROR,
    error,
  };
}

// Update Existing Site

function updateSiteRequest() {
  return {
    type: UPDATE_SITE_REQUEST,
  };
}

function updateSiteSuccess() {
  return {
    type: UPDATE_SITE_SUCCESS,
  };
}

function updateSiteError(error) {
  return {
    type: UPDATE_SITE_ERROR,
    error,
  };
}

function saveSiteDone() {
  return {
    type: SAVE_SITE_DONE,
  };
}

export function getAll() {
  return function (dispatch) {
    dispatch(getSitesRequest());
    dispatch(beginApiCall());

    return siteApi
      .getAll()
      .then((response) => {
        dispatch(getSitesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getSitesError(error));
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function getGroups() {
  return function (dispatch) {
    dispatch(getGroupsRequest());
    dispatch(beginApiCall());

    return siteApi
      .getGroups()
      .then((response) => {
        dispatch(getGroupsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getGroupsError(error));
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function getAllLog() {
  return function (dispatch) {
    dispatch(getAllLogRequest());
    dispatch(beginApiCall());

    return siteApi
      .getAllLog()
      .then((response) => {
        dispatch(getAllLogSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getAllLogError(error));
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function getLog(filter) {
  return function (dispatch) {
    dispatch(getLogRequest());
    dispatch(beginApiCall());

    return siteApi
      .getLog(filter)
      .then((response) => {
        dispatch(getLogSuccess(response.data));
        console.log(response.data);
      })
      .catch((error) => {
        dispatch(getLogError(error));
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function save(site) {
  return function (dispatch, getState) {
    site.id ? dispatch(updateSiteRequest()) : dispatch(addSiteRequest());
    dispatch(beginApiCall());

    return siteApi
      .save(site)
      .then((savedSite) => {
        site.id
          ? dispatch(updateSiteSuccess(savedSite))
          : dispatch(addSiteSuccess(savedSite));
      })
      .catch((error) => {
        site.id
          ? dispatch(updateSiteError(error))
          : dispatch(addSiteError(error));
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function remove(id) {
  return function (dispatch) {
    dispatch(removeSiteRequest());
    dispatch(beginApiCall());

    return siteApi
      .remove(id)
      .then((response) => {
        dispatch(removeSiteSuccess(response.data));
      })
      .catch((error) => {
        dispatch(removeSiteError(error));
        dispatch(apiCallError());
        throw error;
      });
  };
}

export function saveDone() {
  return function (dispatch) {
    dispatch(saveSiteDone());
  };
}
