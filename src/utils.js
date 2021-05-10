const isSet = (val) =>
  val !== null && val !== undefined && val !== NaN && val !== "";

module.exports = {
  isSet,
};
