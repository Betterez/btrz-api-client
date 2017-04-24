const { insurancesFactory } = require("./insurances");
const { productsFactory } = require("./products");

module.exports = ({ client }) => {
  return {
    insurances: insurancesFactory({ client }),
    products: productsFactory({ client }),
    __test: {
      client
    }
  };
}