import axios from "axios";

const url = "efs";

export function getSites() {
  return axios.get(url);
}
