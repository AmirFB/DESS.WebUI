import { BEGIN_API_CALL, API_CALL_ERROR } from "../actions/apiStatusActions";
import { isSuccess } from "../helpers/helpers";

const initialState = { apiCallsInProgress: 0 };

export default function apiStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type == BEGIN_API_CALL) {
    return state + 1;
  } else if (action.type === API_CALL_ERROR || isSuccess(action.type)) {
    return state - 1;
  }

  return state;
}
