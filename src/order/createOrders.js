const { createOrderDTO } = require("./orderDTO");

const createOrders = (obj, average) => {
  return Object.values(obj)
    .filter((val) => !!val)
    .map((values) => {
      console.log(values);
      createOrderDTO(values, average);
    });
};

module.exports = {
  createOrders,
};
