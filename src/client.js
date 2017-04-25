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
 */

function createApiClient(options) {
  const { baseURL, timeout = 0, baseURLOverride = {} } = options || productionOptions;
  
  return {
    inventory: require("./endpoints/inventory")({ 
      client: clientFactory({ baseURL, timeout, overrideFn: baseURLOverride.inventory }) 
    })
  }
}

module.exports = { clientFactory, createApiClient }