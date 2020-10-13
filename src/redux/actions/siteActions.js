import { beginApiCall, apiCallError } from "../actions/apiStatusActions";
import * as siteApi from "../../api/siteApi";

export const GET_SITES_REQUEST = "GET_SITES_REQUEST";
export const GET_SITES_SUCCESS = "GET_SITES_SUCCESS";
export const GET_SITES_ERROR = "GET_SITES_ERROR";

export const GET_ALL_LOG_REQUEST = "GET_ALL_LOG_REQUEST";
export const GET_ALL_LOG_SUCCESS = "GET_ALL_LOG_SUCCESS";
export const GET_ALL_LOG_ERROR = "GET_ALL_LOG_ERROR";

export const ADD_SITE_REQUEST = "ADD_SITE_REQUEST";
export const ADD_SITE_SUCCESS = "ADD_SITE_SUCCESS";
export const ADD_SITE_ERROR = "ADD_SITE_ERROR";

export const UPDATE_SITE_REQUEST = "UPDATE_SITE_REQUEST";
export const UPDATE_SITE_SUCCESS = "UPDATE_SITE_SUCCESS";
export const UPDATE_SITE_ERROR = "UPDATE_SITE_ERROR";

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

function getAllLogRequest(logs) {
  return {
    type: GET_ALL_LOG_REQUEST,
    logs,
  };
}

function getLogSuccess(log) {
  return {
    type: GET_ALL_LOG_SUCCESS,
    log,
  };
}

function getLogError(error) {
  return {
    type: GET_ALL_LOG_ERROR,
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

// Update Existing Site

function updateSiteRequest(site) {
  return {
    type: UPDATE_SITE_REQUEST,
    site,
  };
}

function updateSiteSuccess(site) {
  return {
    type: UPDATE_SITE_SUCCESS,
    site,
  };
}

function updateSiteError(error) {
  return {
    type: UPDATE_SITE_ERROR,
    error,
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

export function getAllLog() {
  return function (dispatch) {
    dispatch(getAllLogRequest());
    dispatch(beginApiCall());

    return siteApi
      .getAllLog()
      .then((response) => {
        dispatch(getLogSuccess(response.data));
        console.log("resopnse data");
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
    site.id ? dispatch(addSiteRequest()) : dispatch(updateSiteRequest());
    dispatch(beginApiCall());

    return siteApi
      .save(site)
      .then((savedSite) => {
        site.id
          ? dispatch(addSiteSuccess(savedSite))
          : dispatch(updateSiteSuccess(savedSite));
      })
      .catch((error) => {
        site.id
          ? dispatch(addSiteError(error))
          : dispatch(updateSiteError(error));
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
