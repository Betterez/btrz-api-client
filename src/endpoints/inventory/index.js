const authorizationHeaderName = 'x-api-key';

const { insurancesFactory } = require("./insurances");
const { productsFactory } = require("./products");

module.exports = (client) => {
  return {
    insurances: insurancesFactory({ client, authorizationHeaderName }),
    products: productsFactory({ client, authorizationHeaderName })
  };
}
