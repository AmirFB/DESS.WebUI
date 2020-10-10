export function isRequest(type) {
  return type.substring(type.length - 8) === "_REQUEST";
}

export function isSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export function isError(type) {
  return type.substring(type.length - 6) === "_ERROR";
}
