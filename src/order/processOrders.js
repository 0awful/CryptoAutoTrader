const { processOrder } = require("./processOrder");

const processOrders = (orders) => {
  return Promise.all(
    orders.map((order) => {
      return processOrder(order);
    })
  );
};

module.exports = {
  processOrders,
};
