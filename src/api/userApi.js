import axios from "axios";

const url = "users/";

export function getAll() {
  return axios.get(url);
}

export function head() {
  return axios.head(url);
}

export function get(id) {
  return axios.get(url + id);
}

export function save(user) {
  return user.id ? axios.put(url, user) : axios.post(url + "register", user);
}

export function remove(id) {
  return axios.delete(url + id);
}

export function authenticate(user) {
  return axios.post(url + "authenticate", user);
}

export function getGroups() {
  return axios.get(url + "groups");
}

export function getPermissions() {
  return axios.get("permissions");
}
