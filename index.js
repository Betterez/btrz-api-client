const { clientFactory } = require("./src/helpers");

function defaults({ baseURL, timeout = 0 }) {
  const axiosClient = clientFactory({ baseURL, timeout });
  
  return {
    inventory: require("./src/endpoints/inventory")(axiosClient)
  }
}

module.exports = {
  defaults
}