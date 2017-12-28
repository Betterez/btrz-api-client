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
    inventory: createInventory({ baseURL, timeout, overrideFn: baseURLOverride.inventory }),
    accounts: createAccounts({ baseURL, timeout, overrideFn: baseURLOverride.accounts }),
    sales: createSales({ baseURL, timeout, overrideFn: baseURLOverride.sales }),
    operations: createOperations({ baseURL, timeout, overrideFn: baseURLOverride.operations })
  }
}

/** MODULES */

function createInventory({ baseURL, timeout, overrideFn }) {
  const client = clientFactory({ baseURL, timeout, overrideFn });
  
  return {
    products: require("./endpoints/inventory/products")({ client }),
    insurances: require("./endpoints/inventory/insurances")({ client }),
    stations: require("./endpoints/inventory/stations")({ client }),
    parcelZones: require("./endpoints/inventory/parcel-zones")({ client }),
    countries: require("./endpoints/inventory/countries")({ client }),
    fares: require("./endpoints/inventory/fares")({ client }),
    promos: require("./endpoints/inventory/promos")({ client }),
    fees: require("./endpoints/inventory/fees")({ client }),
    items: require("./endpoints/inventory/items")({ client }),    
    trips: require("./endpoints/inventory/trips")({ client }),
    filteredTrips: require("./endpoints/inventory/filtered-trips")({ client }),
    __test: {
      client
    }
  }
}

function createAccounts({ baseURL, timeout, overrideFn }) {
  const client = clientFactory({ baseURL, timeout, overrideFn });
  
  return {
    lexicons: require("./endpoints/accounts/lexicons")({ client }),
    shifts: require("./endpoints/accounts/shifts")({ client }),
    customers: require("./endpoints/accounts/customers")({ client }),
    __test: {
      client
    }
  }
}

function createSales({ baseURL, timeout, overrideFn }) {
  const client = clientFactory({ baseURL, timeout, overrideFn });
  
  return {
    paymentProviders: require("./endpoints/sales/payment-providers")({ client }),
    cart: require("./endpoints/sales/cart")({ client }),
    giftCertificates: require("./endpoints/sales/gift-certificates")({ client }),
    customFields: require("./endpoints/sales/custom-fields")({ client }),
    order: require("./endpoints/sales/order")({ client }),
    voucher: require("./endpoints/sales/voucher")({ client }),
    __test: {
      client
    }
  }
}

function createOperations({ baseURL, timeout, overrideFn }) {
  const client = clientFactory({ baseURL, timeout, overrideFn });

  return {
    parcel: require("./endpoints/operations/parcel")({ client }),
    appliedInsurance: require("./endpoints/operations/applied_insurance")({ client }),
    transaction: require("./endpoints/operations/transaction")({ client }),
    manifest: require("./endpoints/operations/manifest")({ client }),
    redemption: require("./endpoints/operations/redemption")({ client }),
    __test: {
      client
    }
  }
}


module.exports = { clientFactory, createApiClient }