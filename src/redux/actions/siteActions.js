import * as siteApi from "../../api/siteApi";

export const GET_SITES_REQUEST = "GET_SITES_REQUEST";
export const GET_SITES_SUCCESS = "GET_SITES_SUCCESS";
export const GET_SITES_ERROR = "GET_SITES_ERROR";

export function getSitesSuccess(sites) {
  return {
    type: GET_SITES_SUCCESS,
    sites,
  };
}

export function getSitesError(sites) {
  return {
    type: GET_SITES_ERROR,
    sites,
  };
}

export function getSites() {
  return function (dispatch) {
    dispatch({ type: GET_SITES_REQUEST });

    return siteApi
      .getSites()
      .then((response) => {
        dispatch(getSitesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(getSitesError(error));
      });
  };
}
