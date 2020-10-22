import {
  GET_SITES_REQUEST,
  GET_SITES_SUCCESS,
  GET_SITES_ERROR,
  UPDATE_SITE_REQUEST,
  UPDATE_SITE_SUCCESS,
  UPDATE_SITE_ERROR,
  GET_ALL_LOG_REQUEST,
  GET_ALL_LOG_SUCCESS,
  GET_ALL_LOG_ERROR,
  UPDATE_STATUS,
} from "../actions/siteActions";
import { statusType, batteryStatusType } from "../../types/siteTypes";

const INITIAL_STATE = {
  loading: false,
  hasError: false,
  error: null,
  sites: [],
};

function getStatusState(site, status) {
  if (!status) return statusType.Null;

  if (
    status.hvAlarm ||
    status.lvAlarm ||
    status.tamperAlarm ||
    status.mainPowerFault ||
    status.hvPowerFault ||
    status.hvChargeFault ||
    status.hvDischargeFault
  )
    return statusType.Fault;

  if (
    // status.temperature > site.maxTemperature ||
    // status.temperature < site.minTemperature ||
    status.temperature > 40 ||
    status.temperature < 10 ||
    status.batteryStatus === batteryStatusType.Fault ||
    status.batteryStatus === batteryStatusType.Low
  )
    return statusType.Warning;

  return statusType.Clear;
}

export default function siteRecuder(state = INITIAL_STATE, action) {
  let sites = [];
  switch (action.type) {
    case GET_SITES_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_SITES_SUCCESS:
      sites = [...action.sites];
      sites.map((s) => (s.status.state = getStatusState(s, s.status)));
      return {
        ...state,
        loading: false,
        hasError: false,
        sites: sites,
      };

    case GET_SITES_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
        sites: state.sites,
        error: action.error,
      };

    case UPDATE_SITE_REQUEST:
      return {
        ...state,
        saving: true,
      };

    case UPDATE_SITE_SUCCESS:
      return {
        ...state,
        saving: false,
        saveSuccessfull: true,
      };

    case UPDATE_SITE_ERROR:
      return {
        ...state,
        saving: false,
        saveSuccessfull: false,
        error: action.error,
      };

    case GET_ALL_LOG_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_LOG_SUCCESS:
      return {
        ...state,
        loading: false,
        hasError: false,
        log: action.log,
      };

    case GET_ALL_LOG_ERROR:
      return {
        ...state,
        loading: false,
        hasError: true,
        log: state.log,
        error: action.error,
      };

    case UPDATE_STATUS:
      sites = [...state.sites];
      const index = sites.findIndex((s) => s.id === action.status.siteId);
      const site = {
        ...sites[index],
        status: {
          ...action.status,
          state: getStatusState(sites[index], action.status),
        },
      };
      sites.splice(index, 1);
      sites.splice(index, 0, site);
      return { ...state, sites: sites };

    default:
      return state;
  }
}
