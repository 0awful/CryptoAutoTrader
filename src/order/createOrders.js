const { createOrderDTO } = require("./orderDTO");

const createOrders = (obj, average, tolerance) => {
  return Object.values(obj).map((values) =>
    createOrderDTO(values, average, tolerance)
  );
};

module.exports = {
  createOrders,
};
