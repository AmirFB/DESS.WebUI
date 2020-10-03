import * as types from "../actions/actionTypes";
import * as siteApi from "../../api/siteApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function getSitesSuccess(courses) {
  return { type: types.GET_SITES_SUCCESS, courses };
}

export function addSiteSuccess(course) {
  return { type: types.ADD_SITE_SUCCESS, course };
}

export function updateSiteSuccess(course) {
  return { type: types.UPDATE_SITE_SUCCESS, course };
}

export function deleteSiteOptimistic(course) {
  return { type: types.DELETE_SITE_OPTIMISTIC, course };
}

export function getSites() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return siteApi
      .getSites()
      .then((sites) => {
        dispatch(getSitesSuccess(sites));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
