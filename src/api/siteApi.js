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
  return axios.get(url + "log_old");
}

export function getLog(filter) {
  return axios.post(url + "log", filter);
}

export function getGroups() {
  return axios.get(url + "groups");
}

export function resetFaults(moduleId, faultId) {
  return axios.get(url + "reset/" + moduleId + "/" + faultId ? faultId : "");
}
