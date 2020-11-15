import axios from "axios";

const url = "sites/";

export function getAll() {
  return axios.get(url);
}

export function get(id) {
  return axios.get(url + id);
}

export function save(site) {
  const data = { ...site };
  delete data.status;
  return site.id ? axios.put(url, data) : axios.post(url, data);
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
