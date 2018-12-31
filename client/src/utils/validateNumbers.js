import currency from "currency.js";

export default value => {
  return value.toFixed(2).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
  // return !isNaN(value - parseFloat(value));
};
