import forge from "node-forge";

export function generatePasswordHash(password) {
  const sha = forge.md.sha256.create();

  return btoa(sha.update(password).digest().getBytes());
}
