import { beginApiCall, apiCallError } from "../../api/siteApi";

const GET_SITES_REQUEST = "GET_SITES_REQUEST";
const GET_SITES_SUCCESS = "GET_SITES_SUCCESS";
const GET_SITES_ERROR = "GET_SITES_ERROR";

const ADD_SITE_REQUEST = "ADD_SITE_REQUEST";
const ADD_SITE_SUCCESS = "ADD_SITE_SUCCESS";
const ADD_SITE_ERROR = "ADD_SITE_ERROR";

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

const UPDATE_SITE_REQUEST = "UPDATE_SITE_REQUEST";
const UPDATE_SITE_SUCCESS = "UPDATE_SITE_SUCCESS";
const UPDATE_SITE_ERROR = "UPDATE_SITE_ERROR";

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

export function getSites() {
  return function (dispatch) {
    dispatch(getSitesRequest());
    dispatch(beginApiCall());

    return siteApi
      .getSites()
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

export function saveSite(site) {
  return function (dispatch, getState) {
    site.id ? dispatch(addSiteRequest()) : dispatch(updateSiteRequest());
    dispatch(beginApiCall());

    return siteApi
      .saveCourse(site)
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
