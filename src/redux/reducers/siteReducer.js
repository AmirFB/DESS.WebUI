import * as types from "../actions/actionTypes";

export default function siteReducer(state = [], action) {
  switch (action.type) {
    case types.GET_SITES:
      return [...state, { ...action.site }];

    default:
      return state;
  }
}
