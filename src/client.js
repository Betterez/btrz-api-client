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

function clientFactory({baseURL, headers, timeout, overrideFn}) {
  const url = overrideFn ? overrideFn(baseURL) : baseURL;
  return axios.create({baseURL: url, timeout, headers: {"Accept": "application/json", ...headers}});
}

/** MODULES */

function createInventory({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    products: require("./endpoints/inventory/products")({client, internalAuthTokenProvider}),
    insurances: require("./endpoints/inventory/insurances")({client, internalAuthTokenProvider}),
    stations: require("./endpoints/inventory/stations")({client, internalAuthTokenProvider}),
    stationsZones: require("./endpoints/inventory/stations-zones")({client, internalAuthTokenProvider}),
    parcelZones: require("./endpoints/inventory/parcel-zones")({client, internalAuthTokenProvider}),
    countries: require("./endpoints/inventory/countries")({client, internalAuthTokenProvider}),
    fares: require("./endpoints/inventory/fares")({client, internalAuthTokenProvider}),
    promos: require("./endpoints/inventory/promos")({client, internalAuthTokenProvider}),
    fees: require("./endpoints/inventory/fees")({client, internalAuthTokenProvider}),
    items: require("./endpoints/inventory/items")({client, internalAuthTokenProvider}),
    filteredTrips: require("./endpoints/inventory/filtered-trips")({client, internalAuthTokenProvider}),
    filteredTripsV2: require("./endpoints/inventory/filtered-trips-v2")({client, internalAuthTokenProvider}),
    ssrs: require("./endpoints/inventory/ssrs")({client, internalAuthTokenProvider}),
    fareClasses: require("./endpoints/inventory/fare-classes")({client, internalAuthTokenProvider}),
    journeyPrices: require("./endpoints/inventory/journey-prices")({client, internalAuthTokenProvider}),
    brands: require("./endpoints/inventory/brands")({client, internalAuthTokenProvider}),
    operatingCompanies: require("./endpoints/inventory/operating-companies")({client, internalAuthTokenProvider}),
    operationMessages: require("./endpoints/inventory/operation-messages")({client, internalAuthTokenProvider}),
    routes: require("./endpoints/inventory/routes")({client, internalAuthTokenProvider}),
    schedules: require("./endpoints/inventory/schedules")({client, internalAuthTokenProvider}),
    serviceNumbers: require("./endpoints/inventory/service-numbers")({client, internalAuthTokenProvider}),
    companies: require("./endpoints/inventory/companies")({client, internalAuthTokenProvider}),
    bundleFares: require("./endpoints/inventory/bundle-fares")({client, internalAuthTokenProvider}),
    giftCertificateDefinitions: require("./endpoints/inventory/gift-certificate-definitions")({client, internalAuthTokenProvider}),
    amenities: require("./endpoints/inventory/amenities")({client, internalAuthTokenProvider}),
    amenityGroups: require("./endpoints/inventory/amenity-groups")({client, internalAuthTokenProvider}),
    bundles: require("./endpoints/inventory/bundles")({client, internalAuthTokenProvider}),
    stationGroups: require("./endpoints/inventory/station-groups")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createTrips({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    trips: require("./endpoints/inventory/trips")({client, internalAuthTokenProvider}),
    __test_trips: {
      client
    }
  };
}

function createColtrane({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    paths: require("./endpoints/coltrane/paths")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createAccounts({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    lexicons: require("./endpoints/accounts/lexicons")({client, internalAuthTokenProvider}),
    shifts: require("./endpoints/accounts/shifts")({client, internalAuthTokenProvider}),
    currentShifts: require("./endpoints/accounts/current-shifts")({client, internalAuthTokenProvider}),
    customers: require("./endpoints/accounts/customers")({client, internalAuthTokenProvider}),
    users: require("./endpoints/accounts/users")({client, internalAuthTokenProvider}),
    accounts: require("./endpoints/accounts/accounts")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createSales({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    paymentProviders: require("./endpoints/sales/payment-providers")({client, internalAuthTokenProvider}),
    cart: require("./endpoints/sales/cart")({client, internalAuthTokenProvider}),
    giftCertificates: require("./endpoints/sales/gift-certificates")({client, internalAuthTokenProvider}),
    customFields: require("./endpoints/sales/custom-fields")({client, internalAuthTokenProvider}),
    order: require("./endpoints/sales/order")({client, internalAuthTokenProvider}),
    voucher: require("./endpoints/sales/voucher")({client, internalAuthTokenProvider}),
    cartPromo: require("./endpoints/sales/cart-promo")({client, internalAuthTokenProvider}),
    bundles: require("./endpoints/sales/bundles")({client, internalAuthTokenProvider}),
    redeemableItems: require("./endpoints/sales/redeemable-items")({client, internalAuthTokenProvider}),
    flexpasses: require("./endpoints/sales/flexpasses")({client, internalAuthTokenProvider}),
    syncEntry: require("./endpoints/sales/sync-entry")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createOperations({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    parcel: require("./endpoints/operations/parcels")({client, internalAuthTokenProvider}),
    appliedInsurance: require("./endpoints/operations/applied_insurance")({client, internalAuthTokenProvider}),
    transaction: require("./endpoints/operations/transaction")({client, internalAuthTokenProvider}),
    transactions: require("./endpoints/operations/transactions")({client, internalAuthTokenProvider}),
    tickets: require("./endpoints/operations/tickets")({client, internalAuthTokenProvider}),
    manifest: require("./endpoints/operations/manifest")({client, internalAuthTokenProvider}),
    calendarEntries: require("./endpoints/operations/calendar_entries")({client, internalAuthTokenProvider}),
    redemption: require("./endpoints/operations/redemption")({client, internalAuthTokenProvider}),
    tripChangeInfo: require("./endpoints/operations/trip_change_info")({client, internalAuthTokenProvider}),
    segments: require("./endpoints/operations/segments")({client, internalAuthTokenProvider}),
    movements: require("./endpoints/operations/movements")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createReports({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    reportTypes: require("./endpoints/reports/report-types")({client, internalAuthTokenProvider}),
    customReports: require("./endpoints/reports/custom-reports")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createNotifications({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    printedTickets: require("./endpoints/notifications/printed-tickets")({client, internalAuthTokenProvider}),
    email: require("./endpoints/notifications/email")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createUploads({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    files: require("./endpoints/uploads/files")({client, internalAuthTokenProvider}),
    images: require("./endpoints/uploads/images")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createLoyalty({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    programs: require("./endpoints/loyalty/programs")({client, internalAuthTokenProvider}),
    movements: require("./endpoints/loyalty/movements")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createWebhooks({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    subscriptions: require("./endpoints/webhooks/subscriptions")({client, internalAuthTokenProvider}),
    events: require("./endpoints/webhooks/events")({client, internalAuthTokenProvider}),
    undelivered: require("./endpoints/webhooks/undelivered")({client, internalAuthTokenProvider}),
    webhooks: require("./endpoints/webhooks/webhooks")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createSeatmaps({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    accessTicket: require("./endpoints/seatmaps/access-ticket")({client, internalAuthTokenProvider}),
    seat: require("./endpoints/seatmaps/seat")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createBtrzPay({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    paymentMethods: require("./endpoints/btrzpay/payment-methods")({client, internalAuthTokenProvider}),
    referenceNumbers: require("./endpoints/btrzpay/reference-numbers")({client, internalAuthTokenProvider}),
    payments: require("./endpoints/btrzpay/payments")({client, internalAuthTokenProvider}),
    referencedPayments: require("./endpoints/btrzpay/referenced-payments")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
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
 * @returns {Object} An object with a client for every "module" (needed to override baseURL)
 */
function createApiClient(options) {
  const {baseURL, baseURLOverride = {}, headers, timeout = 0, internalAuthTokenProvider} = options || productionOptions;

  return {
    constants: require("./constants"),
    _cleanClient: clientFactory({baseURL, headers, timeout}),
    inventory: {
      ...createInventory({baseURL, headers, timeout, overrideFn: baseURLOverride.inventory, internalAuthTokenProvider}),
      ...createTrips({baseURL, headers, timeout, overrideFn: baseURLOverride.trips, internalAuthTokenProvider})
    },
    coltrane: createColtrane({baseURL, headers, timeout, overrideFn: baseURLOverride.coltrane, internalAuthTokenProvider}),
    accounts: createAccounts({baseURL, headers, timeout, overrideFn: baseURLOverride.accounts, internalAuthTokenProvider}),
    sales: createSales({baseURL, headers, timeout, overrideFn: baseURLOverride.sales, internalAuthTokenProvider}),
    operations: createOperations({baseURL, headers, timeout, overrideFn: baseURLOverride.operations, internalAuthTokenProvider}),
    reports: createReports({baseURL, headers, timeout, overrideFn: baseURLOverride.reports, internalAuthTokenProvider}),
    notifications: createNotifications({baseURL, headers, timeout, overrideFn: baseURLOverride.notifications, internalAuthTokenProvider}),
    uploads: createUploads({baseURL, headers, timeout, overrideFn: baseURLOverride.uploads, internalAuthTokenProvider}),
    loyalty: createLoyalty({baseURL, headers, timeout, overrideFn: baseURLOverride.loyalty, internalAuthTokenProvider}),
    webhooks: createWebhooks({baseURL, headers, timeout, overrideFn: baseURLOverride.webhooks, internalAuthTokenProvider}),
    seatmaps: createSeatmaps({baseURL, headers, timeout, overrideFn: baseURLOverride.seatmaps, internalAuthTokenProvider}),
    btrzpay: createBtrzPay({baseURL, headers, timeout, overrideFn: baseURLOverride.btrzpay, internalAuthTokenProvider})
  };
}

module.exports = {clientFactory, createApiClient};
