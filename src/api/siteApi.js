import axios from "axios";

const url = "efs";

export function getSites() {
  return axios.get(url);
}

export function saveSite(site) {
  return site.id ? axios.put(url, site) : axios.post(url, site);
}
