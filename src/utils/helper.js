export function isArrayEmpty(obj) {
    return Object.values(obj).every(value => value === "" || value === null || value === undefined);
  }