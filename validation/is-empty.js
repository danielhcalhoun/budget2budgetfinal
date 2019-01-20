const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "number" && value.toString().trim().length === 0) ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0) ||
  (Array.isArray(value) && value.length === 0);

module.exports = isEmpty;
