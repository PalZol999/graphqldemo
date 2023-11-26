const ordersModel = require('./orders.model');

module.exports = {
  Query: {
    orders: () => {
      console.log("Resolving orders...");
      const result = ordersModel.getAllOrders();
      console.log("Orders resolved:", result);
      return result;
    },
  },
};