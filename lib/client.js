"use strict";

var axios = require("axios");
var productionOptions = require("./productionDefaults");

/**
 * @description
 * Creates a new axios client
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
  return axios.create({ baseURL: url, timeout: timeout, headers: { 'Accept': 'application/json' } });
}

/**
 * @description
 * Returns the apiClient object with defaults set
 *
 * @param {String}   baseUrl - the base url use for all endpoints by default
 * @param {String}   timeout
 * @param {Object}   baseURLOverride - options object allowing to override baseUrl for some endpoints
 * @param {Function} baseURLOverride.someEndpoint
 * @param {Object}   internalAuthTokenProvider - an object containing a getToken() function that, when called, returns an authorization
 *                                               token that's valid for making service-to-service API calls.
 * @param {Function} internalAuthTokenProvider.getToken
 * 
 * @returns An object with a client for every "module" (needed to override baseURL)
 */

function createApiClient(options) {
  var _ref2 = options || productionOptions,
      baseURL = _ref2.baseURL,
      _ref2$timeout = _ref2.timeout,
      timeout = _ref2$timeout === undefined ? 0 : _ref2$timeout,
      _ref2$baseURLOverride = _ref2.baseURLOverride,
      baseURLOverride = _ref2$baseURLOverride === undefined ? {} : _ref2$baseURLOverride,
      internalAuthTokenProvider = _ref2.internalAuthTokenProvider;

  return {
    _cleanClient: clientFactory({ baseURL: baseURL, timeout: timeout }),
    inventory: createInventory({ baseURL: baseURL, timeout: timeout, overrideFn: baseURLOverride.inventory, internalAuthTokenProvider: internalAuthTokenProvider }),
    accounts: createAccounts({ baseURL: baseURL, timeout: timeout, overrideFn: baseURLOverride.accounts, internalAuthTokenProvider: internalAuthTokenProvider }),
    sales: createSales({ baseURL: baseURL, timeout: timeout, overrideFn: baseURLOverride.sales, internalAuthTokenProvider: internalAuthTokenProvider }),
    operations: createOperations({ baseURL: baseURL, timeout: timeout, overrideFn: baseURLOverride.operations, internalAuthTokenProvider: internalAuthTokenProvider }),
    reports: createReports({ baseURL: baseURL, timeout: timeout, overrideFn: baseURLOverride.reports, internalAuthTokenProvider: internalAuthTokenProvider }),
    notifications: createNotifications({ baseURL: baseURL, timeout: timeout, overrideFn: baseURLOverride.notifications, internalAuthTokenProvider: internalAuthTokenProvider })
  };
}

/** MODULES */

function createInventory(_ref3) {
  var baseURL = _ref3.baseURL,
      timeout = _ref3.timeout,
      overrideFn = _ref3.overrideFn,
      internalAuthTokenProvider = _ref3.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, timeout: timeout, overrideFn: overrideFn });

  return {
    products: require("./endpoints/inventory/products")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    insurances: require("./endpoints/inventory/insurances")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    stations: require("./endpoints/inventory/stations")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    parcelZones: require("./endpoints/inventory/parcel-zones")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    countries: require("./endpoints/inventory/countries")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    fares: require("./endpoints/inventory/fares")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    promos: require("./endpoints/inventory/promos")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    fees: require("./endpoints/inventory/fees")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    items: require("./endpoints/inventory/items")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    trips: require("./endpoints/inventory/trips")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    filteredTrips: require("./endpoints/inventory/filtered-trips")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    ssrs: require("./endpoints/inventory/ssrs")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    fareClasses: require("./endpoints/inventory/fare-classes")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createAccounts(_ref4) {
  var baseURL = _ref4.baseURL,
      timeout = _ref4.timeout,
      overrideFn = _ref4.overrideFn,
      internalAuthTokenProvider = _ref4.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, timeout: timeout, overrideFn: overrideFn });

  return {
    lexicons: require("./endpoints/accounts/lexicons")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    shifts: require("./endpoints/accounts/shifts")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customers: require("./endpoints/accounts/customers")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createSales(_ref5) {
  var baseURL = _ref5.baseURL,
      timeout = _ref5.timeout,
      overrideFn = _ref5.overrideFn,
      internalAuthTokenProvider = _ref5.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, timeout: timeout, overrideFn: overrideFn });

  return {
    paymentProviders: require("./endpoints/sales/payment-providers")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    cart: require("./endpoints/sales/cart")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    giftCertificates: require("./endpoints/sales/gift-certificates")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customFields: require("./endpoints/sales/custom-fields")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    order: require("./endpoints/sales/order")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    voucher: require("./endpoints/sales/voucher")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createOperations(_ref6) {
  var baseURL = _ref6.baseURL,
      timeout = _ref6.timeout,
      overrideFn = _ref6.overrideFn,
      internalAuthTokenProvider = _ref6.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, timeout: timeout, overrideFn: overrideFn });

  return {
    parcel: require("./endpoints/operations/parcels")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    appliedInsurance: require("./endpoints/operations/applied_insurance")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    transaction: require("./endpoints/operations/transaction")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    manifest: require("./endpoints/operations/manifest")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    redemption: require("./endpoints/operations/redemption")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createReports(_ref7) {
  var baseURL = _ref7.baseURL,
      timeout = _ref7.timeout,
      overrideFn = _ref7.overrideFn,
      internalAuthTokenProvider = _ref7.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, timeout: timeout, overrideFn: overrideFn });

  return {
    reportTypes: require("./endpoints/reports/report-types")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customReports: require("./endpoints/reports/custom-reports")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createNotifications(_ref8) {
  var baseURL = _ref8.baseURL,
      timeout = _ref8.timeout,
      overrideFn = _ref8.overrideFn,
      internalAuthTokenProvider = _ref8.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, timeout: timeout, overrideFn: overrideFn });

  return {
    printedTickets: require("./endpoints/notifications/printed-tickets")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    email: require("./endpoints/notifications/email")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

module.exports = { clientFactory: clientFactory, createApiClient: createApiClient };