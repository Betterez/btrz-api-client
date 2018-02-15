const axios = require("axios");
const productionOptions = require("./productionDefaults");

/**
 * @description
 * Creates a new axios client
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
 * @param {Object}   internalAuthTokenProvider - an object containing a getToken() function that, when called, returns an authorization
 *                                               token that's valid for making service-to-service API calls.
 * @param {Function} internalAuthTokenProvider.getToken
 * 
 * @returns An object with a client for every "module" (needed to override baseURL)
 */

function createApiClient(options) {
  const { baseURL, timeout = 0, baseURLOverride = {}, internalAuthTokenProvider } = options || productionOptions;

  return {
    _cleanClient: clientFactory({ baseURL, timeout }),
    inventory: createInventory({ baseURL, timeout, overrideFn: baseURLOverride.inventory, internalAuthTokenProvider }),
    accounts: createAccounts({ baseURL, timeout, overrideFn: baseURLOverride.accounts, internalAuthTokenProvider }),
    sales: createSales({ baseURL, timeout, overrideFn: baseURLOverride.sales, internalAuthTokenProvider }),
    operations: createOperations({ baseURL, timeout, overrideFn: baseURLOverride.operations, internalAuthTokenProvider })
  }
}

/** MODULES */

function createInventory({ baseURL, timeout, overrideFn, internalAuthTokenProvider }) {
  const client = clientFactory({ baseURL, timeout, overrideFn });
  
  return {
    products: require("./endpoints/inventory/products")({ client, internalAuthTokenProvider }),
    insurances: require("./endpoints/inventory/insurances")({ client, internalAuthTokenProvider }),
    stations: require("./endpoints/inventory/stations")({ client, internalAuthTokenProvider }),
    parcelZones: require("./endpoints/inventory/parcel-zones")({ client, internalAuthTokenProvider }),
    countries: require("./endpoints/inventory/countries")({ client, internalAuthTokenProvider }),
    fares: require("./endpoints/inventory/fares")({ client, internalAuthTokenProvider }),
    promos: require("./endpoints/inventory/promos")({ client, internalAuthTokenProvider }),
    fees: require("./endpoints/inventory/fees")({ client, internalAuthTokenProvider }),
    items: require("./endpoints/inventory/items")({ client, internalAuthTokenProvider }),
    trips: require("./endpoints/inventory/trips")({ client, internalAuthTokenProvider }),
    filteredTrips: require("./endpoints/inventory/filtered-trips")({ client, internalAuthTokenProvider }),
    ssrs: require("./endpoints/inventory/ssrs")({ client, internalAuthTokenProvider }),
    __test: {
      client
    }
  }
}

function createAccounts({ baseURL, timeout, overrideFn, internalAuthTokenProvider }) {
  const client = clientFactory({ baseURL, timeout, overrideFn });
  
  return {
    lexicons: require("./endpoints/accounts/lexicons")({ client, internalAuthTokenProvider }),
    shifts: require("./endpoints/accounts/shifts")({ client, internalAuthTokenProvider }),
    customers: require("./endpoints/accounts/customers")({ client, internalAuthTokenProvider }),
    __test: {
      client
    }
  }
}

function createSales({ baseURL, timeout, overrideFn, internalAuthTokenProvider }) {
  const client = clientFactory({ baseURL, timeout, overrideFn });
  
  return {
    paymentProviders: require("./endpoints/sales/payment-providers")({ client, internalAuthTokenProvider }),
    cart: require("./endpoints/sales/cart")({ client, internalAuthTokenProvider }),
    giftCertificates: require("./endpoints/sales/gift-certificates")({ client, internalAuthTokenProvider }),
    customFields: require("./endpoints/sales/custom-fields")({ client, internalAuthTokenProvider }),
    order: require("./endpoints/sales/order")({ client, internalAuthTokenProvider }),
    voucher: require("./endpoints/sales/voucher")({ client, internalAuthTokenProvider }),
    __test: {
      client
    }
  }
}

function createOperations({ baseURL, timeout, overrideFn, internalAuthTokenProvider }) {
  const client = clientFactory({ baseURL, timeout, overrideFn });

  return {
    parcel: require("./endpoints/operations/parcels")({ client, internalAuthTokenProvider }),
    appliedInsurance: require("./endpoints/operations/applied_insurance")({ client, internalAuthTokenProvider }),
    transaction: require("./endpoints/operations/transaction")({ client, internalAuthTokenProvider }),
    manifest: require("./endpoints/operations/manifest")({ client, internalAuthTokenProvider }),
    redemption: require("./endpoints/operations/redemption")({ client, internalAuthTokenProvider }),
    __test: {
      client
    }
  }
}


module.exports = { clientFactory, createApiClient }