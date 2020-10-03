import axios from "axios";
import { handleResponse, handleError } from "./apiUtils";

const url = "efs";

export function getSites() {
  return axios.get(url).then(handleResponse).catch(handleError);
}
