const { createOrderDTO } = require('./orderDTO');

const createOrders = (obj, average) => {
    return Object.values(obj).map((values) => createOrderDTO(values, average));
};

module.exports = {
   createOrders,
}
