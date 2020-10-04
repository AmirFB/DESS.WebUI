import {
  GET_SITES_REQUEST,
  GET_SITES_SUCCESS,
  GET_SITES_ERROR,
} from "../actions/siteActions";

const INITIAL_STATE = {
  loading: false,
  hasError: 55,
  error: null,
  sites: [],
};

export default function siteRecuder(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SITES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_SITES_SUCCESS:
      console.log("Recuder GetSuceess.");
      console.log("data: ");
      console.log(action.sites);
      return {
        ...state,
        loading: false,
        hasError: false,
        sites: action.sites,
      };

    case GET_SITES_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
        error: action.sites,
      };

    default:
      return state;
  }
}
