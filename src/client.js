const axios = require("axios");
const productionOptions = require("./productionDefaults");

/**
 * @description
 * Creates a new axion client
 *
 * @param {String}   baseUrl - the base url use for all endpoints by default
 * @param {String}   timeout
 * @param {Function} overrideFn - allows to override the baseUrl
 */

function clientFactory({ baseURL, timeout, overrideFn }) {
  const url = overrideFn ? overrideFn(baseURL) : baseURL;
  return axios.create({ baseURL: url, timeout, headers: { 'accept': 'application/json' } });
}

/**
 * @description
 * Returns the apiClient object with defaults set
 *
 * @param {String}   baseUrl - the base url use for all endpoints by default
 * @param {String}   timeout
 * @param {Object}   baseURLOverride - options object allowing to override baseUrl for some endpoints
 * @param {Function} baseURLOverride.someEndpoint
 * 
 * @returns An object with a client for every "module" (needed to override baseURL)
 */

function createApiClient(options) {
  const { baseURL, timeout = 0, baseURLOverride = {} } = options || productionOptions;
  
  return {
    _cleanClient: clientFactory({ baseURL, timeout }),
    inventory: createInventory({ baseURL, timeout, overrideFn: baseURLOverride.inventory })
  }
}

/** MODULES */

function createInventory({ baseURL, timeout, overrideFn }) {
  const client = clientFactory({ baseURL, timeout, overrideFn });
  
  return {
    products: require("./endpoints/inventory/products")({ client }),
    insurances: require("./endpoints/inventory/insurances")({ client }),
    stations: require("./endpoints/inventory/stations")({ client }),
    __test: {
      client
    }
  }
}


module.exports = { clientFactory, createApiClient }