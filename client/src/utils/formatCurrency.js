import currency from "currency.js";

export default value => {
  // Remove all existing commas before converting
  // This is not required if the normalize method is implemented and already removing commas
  if (value) {
    return value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1");
  }
};
