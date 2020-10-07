import axios from "axios";

const url = "efs/";

export function getAll() {
  return axios.get(url);
}

export function get(id) {
  return axios.get(url + id);
}

export function saveSite(site) {
  return site.id ? axios.put(url, site) : axios.post(url, site);
}

export function remove(id) {
  return axios.delete(url + id);
}

export function getStatus(id) {
  return axios.get(url + id + "/status");
}

export function getAllLog() {
  return axios.get(url + "log");
}

export function getLog(id) {
  return axios.get(url + id + "/log");
}
