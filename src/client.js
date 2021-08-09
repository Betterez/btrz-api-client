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
    docs: require("./endpoints/inventory/docs")({client}),
    products: require("./endpoints/inventory/products")({client, internalAuthTokenProvider}),
    insurances: require("./endpoints/inventory/insurances")({client, internalAuthTokenProvider}),
    insurancesCost: require("./endpoints/inventory/insurancesCost")({client, internalAuthTokenProvider}),
    stations: require("./endpoints/inventory/stations")({client, internalAuthTokenProvider}),
    stationsZones: require("./endpoints/inventory/stations-zones")({client, internalAuthTokenProvider}),
    parcelZones: require("./endpoints/inventory/parcel-zones")({client, internalAuthTokenProvider}),
    countries: require("./endpoints/inventory/countries")({client, internalAuthTokenProvider}),
    fares: require("./endpoints/inventory/fares")({client, internalAuthTokenProvider}),
    promos: require("./endpoints/inventory/promos")({client, internalAuthTokenProvider}),
    seatmaps: require("./endpoints/inventory/seatmaps")({client, internalAuthTokenProvider}),
    fees: require("./endpoints/inventory/fees")({client, internalAuthTokenProvider}),
    items: require("./endpoints/inventory/items")({client, internalAuthTokenProvider}),
    filteredTrips: require("./endpoints/inventory/filtered-trips")({client, internalAuthTokenProvider}),
    filteredTripsV2: require("./endpoints/inventory/filtered-trips-v2")({client, internalAuthTokenProvider}),
    ssrs: require("./endpoints/inventory/ssrs")({client, internalAuthTokenProvider}),
    fareClasses: require("./endpoints/inventory/fare-classes")({client, internalAuthTokenProvider}),
    journeyPrices: require("./endpoints/inventory/journey-prices")({client, internalAuthTokenProvider}),
    brands: require("./endpoints/inventory/brands")({client, internalAuthTokenProvider}),
    operatingCompanies: require("./endpoints/inventory/operating-companies")({client, internalAuthTokenProvider}),
    operationMessages: require("./endpoints/inventory/operation-messages")({ client, internalAuthTokenProvider }),
    paymentTerminals: require("./endpoints/inventory/payment-terminals")({ client, internalAuthTokenProvider }),
    serviceTypes: require("./endpoints/inventory/service-types")({ client, internalAuthTokenProvider }),
    customContent: require("./endpoints/inventory/custom-content")({ client, internalAuthTokenProvider }),
    seatfees: require("./endpoints/inventory/seatfees")({ client, internalAuthTokenProvider }),
    routes: require("./endpoints/inventory/routes")({ client, internalAuthTokenProvider }),
    bareRoutes: require("./endpoints/inventory/bare-routes")({ client, internalAuthTokenProvider }),
    schedules: require("./endpoints/inventory/schedules")({client, internalAuthTokenProvider}),
    serviceNumbers: require("./endpoints/inventory/service-numbers")({client, internalAuthTokenProvider}),
    companies: require("./endpoints/inventory/companies")({client, internalAuthTokenProvider}),
    bundleFares: require("./endpoints/inventory/bundle-fares")({client, internalAuthTokenProvider}),
    giftCertificateDefinitions: require("./endpoints/inventory/gift-certificate-definitions")({client, internalAuthTokenProvider}),
    amenities: require("./endpoints/inventory/amenities")({client, internalAuthTokenProvider}),
    amenityGroups: require("./endpoints/inventory/amenity-groups")({client, internalAuthTokenProvider}),
    bundles: require("./endpoints/inventory/bundles")({client, internalAuthTokenProvider}),
    stationGroups: require("./endpoints/inventory/station-groups")({ client, internalAuthTokenProvider }),
    zonePrices: require("./endpoints/inventory/zone-prices")({ client, internalAuthTokenProvider }),
    zonePriceOverages: require("./endpoints/inventory/zone-price-overages")({ client, internalAuthTokenProvider }),
    travellerCardProviders: require("./endpoints/inventory/traveller-card-providers")({client, internalAuthTokenProvider}),
    travellerCardProvidersTypes: require("./endpoints/inventory/traveller-card-providers-types")({client, internalAuthTokenProvider}),
    travellerCardTypes: require("./endpoints/inventory/traveller-card-types")({client, internalAuthTokenProvider}),
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
    docs: require("./endpoints/coltrane/docs")({ client }),
    paths: require("./endpoints/coltrane/paths")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createAccounts({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    docs: require("./endpoints/accounts/docs")({ client }),
    trustedMachines: require("./endpoints/accounts/trusted-machines")({client, internalAuthTokenProvider}),
    lexicons: require("./endpoints/accounts/lexicons")({client, internalAuthTokenProvider}),
    shifts: require("./endpoints/accounts/shifts")({client, internalAuthTokenProvider}),
    currentShifts: require("./endpoints/accounts/current-shifts")({client, internalAuthTokenProvider}),
    applications: require("./endpoints/accounts/applications")({client, internalAuthTokenProvider}),
    applicationSettings: require("./endpoints/accounts/application-settings")({client, internalAuthTokenProvider}),
    customers: require("./endpoints/accounts/customers")({client, internalAuthTokenProvider}),
    users: require("./endpoints/accounts/users")({client, internalAuthTokenProvider}),
    accounts: require("./endpoints/accounts/accounts")({client, internalAuthTokenProvider}),
    application: require("./endpoints/accounts/application")({client, internalAuthTokenProvider}),
    travellers: require("./endpoints/accounts/travellers")({client, internalAuthTokenProvider}),
    interline: require("./endpoints/accounts/interline")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createSales({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn});

  return {
    docs: require("./endpoints/sales/docs")({ client }),
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
    docs: require("./endpoints/operations/docs")({ client }),
    flexpasses: require("./endpoints/operations/flexpasses")({client, internalAuthTokenProvider}),
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
    loans: require("./endpoints/operations/loans")({client, internalAuthTokenProvider}),
    movements: require("./endpoints/operations/movements")({client, internalAuthTokenProvider}),
    scheduledNotifications: require("./endpoints/operations/scheduled_notifications")({client, internalAuthTokenProvider}),
    waitlists: require("./endpoints/operations/waitlists")({client, internalAuthTokenProvider}),
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
    manifestNotifications: require("./endpoints/notifications/manifest-notifications")({client, internalAuthTokenProvider}),
    printedTickets: require("./endpoints/notifications/printed-tickets")({client, internalAuthTokenProvider}),
    email: require("./endpoints/notifications/email")({client, internalAuthTokenProvider}),
    customers: require("./endpoints/notifications/customers")({client, internalAuthTokenProvider}),
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
    docs: require("./endpoints/btrzpay/docs")({ client }),
    paymentMethods: require("./endpoints/btrzpay/payment-methods")({client, internalAuthTokenProvider}),
    referenceNumbers: require("./endpoints/btrzpay/reference-numbers")({client, internalAuthTokenProvider}),
    payments: require("./endpoints/btrzpay/payments")({client, internalAuthTokenProvider}),
    referencedPayments: require("./endpoints/btrzpay/referenced-payments")({client, internalAuthTokenProvider}),
    customers: require("./endpoints/btrzpay/customers")({client, internalAuthTokenProvider}),
    customerCards: require("./endpoints/btrzpay/customerCards")({client, internalAuthTokenProvider}),
    squareTerminals: require("./endpoints/btrzpay/square").squareTerminalsFactory({client, internalAuthTokenProvider}),
    squareWebhooks: require("./endpoints/btrzpay/square").squareWebhooksFactory({client, internalAuthTokenProvider}),
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
