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
  var _ref2 = options || productionOptions,
      baseURL = _ref2.baseURL,
      _ref2$timeout = _ref2.timeout,
      timeout = _ref2$timeout === undefined ? 0 : _ref2$timeout,
      _ref2$baseURLOverride = _ref2.baseURLOverride,
      baseURLOverride = _ref2$baseURLOverride === undefined ? {} : _ref2$baseURLOverride;

  return {
    _cleanClient: clientFactory({ baseURL: baseURL, timeout: timeout }),
    inventory: createInventory({ baseURL: baseURL, timeout: timeout, overrideFn: baseURLOverride.inventory }),
    accounts: createAccounts({ baseURL: baseURL, timeout: timeout, overrideFn: baseURLOverride.accounts })
  };
}

/** MODULES */

function createInventory(_ref3) {
  var baseURL = _ref3.baseURL,
      timeout = _ref3.timeout,
      overrideFn = _ref3.overrideFn;

  var client = clientFactory({ baseURL: baseURL, timeout: timeout, overrideFn: overrideFn });

  return {
    products: require("./endpoints/inventory/products")({ client: client }),
    insurances: require("./endpoints/inventory/insurances")({ client: client }),
    stations: require("./endpoints/inventory/stations")({ client: client }),
    parcelZones: require("./endpoints/inventory/parcel-zones")({ client: client }),
    countries: require("./endpoints/inventory/countries")({ client: client }),
    fares: require("./endpoints/inventory/fares")({ client: client }),
    __test: {
      client: client
    }
  };
}

function createAccounts(_ref4) {
  var baseURL = _ref4.baseURL,
      timeout = _ref4.timeout,
      overrideFn = _ref4.overrideFn;

  var client = clientFactory({ baseURL: baseURL, timeout: timeout, overrideFn: overrideFn });

  return {
    lexicons: require("./endpoints/accounts/lexicons")({ client: client }),
    __test: {
      client: client
    }
  };
}

module.exports = { clientFactory: clientFactory, createApiClient: createApiClient };