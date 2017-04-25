"use strict";

var axios = require("axios");
var productionOptions = require("./productionDefaults");

/**
 * @description
 * Creates a new axion client
 *
 * @param {String}   baseUrl - the base url use for all endpoints by default
 * @param {String}   timeout
 * @param {Function} overrideFn - allows to override the baseUrl
 */

function clientFactory(_ref) {
  var baseURL = _ref.baseURL,
      timeout = _ref.timeout,
      overrideFn = _ref.overrideFn;

  var url = overrideFn ? overrideFn(baseURL) : baseURL;
  return axios.create({ baseURL: url, timeout: timeout, headers: { 'accept': 'application/json' } });
}

/**
 * 
 * @param {string} modulePath - path to the new api module
 * @param {object} options - configuration options 
 */
function createModule(_ref2) {
  var modulePath = _ref2.modulePath,
      client = _ref2.client;

  if (!modulePath || !client) {
    throw new Error("Missing configuration for module.");
  }

  return require(modulePath)({ client: client });
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
  var _ref3 = options || productionOptions,
      baseURL = _ref3.baseURL,
      _ref3$timeout = _ref3.timeout,
      timeout = _ref3$timeout === undefined ? 0 : _ref3$timeout,
      _ref3$baseURLOverride = _ref3.baseURLOverride,
      baseURLOverride = _ref3$baseURLOverride === undefined ? {} : _ref3$baseURLOverride;

  return {
    _cleanClient: clientFactory({ baseURL: baseURL, timeout: timeout }),
    inventory: createInventory({ baseURL: baseURL, timeout: timeout, overrideFn: baseURLOverride.inventory })
  };
}

/** MODULES */

function createInventory(_ref4) {
  var baseURL = _ref4.baseURL,
      timeout = _ref4.timeout,
      overrideFn = _ref4.overrideFn;

  var client = clientFactory({ baseURL: baseURL, timeout: timeout, overrideFn: overrideFn });

  return {
    products: createModule({
      modulePath: "./endpoints/inventory/products",
      client: client
    }),
    insurances: createModule({
      modulePath: "./endpoints/inventory/insurances",
      client: client
    }),
    __test: {
      client: client
    }
  };
}

module.exports = { clientFactory: clientFactory, createApiClient: createApiClient };