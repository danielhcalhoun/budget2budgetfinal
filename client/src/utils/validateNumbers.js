export default value => {
  const regex = /\d*\.?\d?/g;

  return value && regex.exec(value);
  // return !isNaN(value - parseFloat(value));
};
