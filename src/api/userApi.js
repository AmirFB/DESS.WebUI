import axios from "axios";
import { generatePasswordHash } from "../helpers/cryptography";

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
  const data = {
    ...user,
    password: user.password ? generatePasswordHash(user.password) : null,
  };
  return data.id ? axios.put(url, data) : axios.post(url + "register", data);
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

export function editGroups() {
  return axios.put(url + "groups");
}

export function removeGroups() {
  return axios.delete(url + "groups");
}

export function addGroups() {
  return axios.post(url + "groups");
}

export function getPermissions() {
  return axios.get(url + "permissions");
}

export function refreshToken() {
  return axios.post(url + "refresh");
}

export function logOut() {
  return axios.post(url + "logout");
}
