"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      headers = _ref.headers,
      timeout = _ref.timeout,
      overrideFn = _ref.overrideFn;

  var url = overrideFn ? overrideFn(baseURL) : baseURL;
  return axios.create({ baseURL: url, timeout: timeout, headers: _extends({ "Accept": "application/json" }, headers) });
}

/** MODULES */

function createInventory(_ref2) {
  var baseURL = _ref2.baseURL,
      headers = _ref2.headers,
      timeout = _ref2.timeout,
      overrideFn = _ref2.overrideFn,
      internalAuthTokenProvider = _ref2.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn });

  return {
    docs: require("./endpoints/inventory/docs")({ client: client }),
    products: require("./endpoints/inventory/products")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    insurances: require("./endpoints/inventory/insurances")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    insurancesCost: require("./endpoints/inventory/insurancesCost")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    stations: require("./endpoints/inventory/stations")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    stationsZones: require("./endpoints/inventory/stations-zones")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    parcelZones: require("./endpoints/inventory/parcel-zones")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    countries: require("./endpoints/inventory/countries")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    fares: require("./endpoints/inventory/fares")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    promos: require("./endpoints/inventory/promos")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    seatmaps: require("./endpoints/inventory/seatmaps")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    fees: require("./endpoints/inventory/fees")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    items: require("./endpoints/inventory/items")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    filteredTrips: require("./endpoints/inventory/filtered-trips")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    filteredTripsV2: require("./endpoints/inventory/filtered-trips-v2")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    ssrs: require("./endpoints/inventory/ssrs")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    fareClasses: require("./endpoints/inventory/fare-classes")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    journeyPrices: require("./endpoints/inventory/journey-prices")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    brands: require("./endpoints/inventory/brands")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    operatingCompanies: require("./endpoints/inventory/operating-companies")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    operationMessages: require("./endpoints/inventory/operation-messages")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    paymentTerminals: require("./endpoints/inventory/payment-terminals")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    serviceTypes: require("./endpoints/inventory/service-types")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customContent: require("./endpoints/inventory/custom-content")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    seatfees: require("./endpoints/inventory/seatfees")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    routes: require("./endpoints/inventory/routes")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    bareRoutes: require("./endpoints/inventory/bare-routes")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    schedules: require("./endpoints/inventory/schedules")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    serviceNumbers: require("./endpoints/inventory/service-numbers")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    companies: require("./endpoints/inventory/companies")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    bundleFares: require("./endpoints/inventory/bundle-fares")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    giftCertificateDefinitions: require("./endpoints/inventory/gift-certificate-definitions")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    amenities: require("./endpoints/inventory/amenities")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    amenityGroups: require("./endpoints/inventory/amenity-groups")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    bundles: require("./endpoints/inventory/bundles")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    stationGroups: require("./endpoints/inventory/station-groups")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    zonePrices: require("./endpoints/inventory/zone-prices")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    travellerCardProviders: require("./endpoints/inventory/traveller-card-providers")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    travellerCardProvidersTypes: require("./endpoints/inventory/traveller-card-providers-types")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    travellerCardTypes: require("./endpoints/inventory/traveller-card-types")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createTrips(_ref3) {
  var baseURL = _ref3.baseURL,
      headers = _ref3.headers,
      timeout = _ref3.timeout,
      overrideFn = _ref3.overrideFn,
      internalAuthTokenProvider = _ref3.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn });

  return {
    trips: require("./endpoints/inventory/trips")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test_trips: {
      client: client
    }
  };
}

function createColtrane(_ref4) {
  var baseURL = _ref4.baseURL,
      headers = _ref4.headers,
      timeout = _ref4.timeout,
      overrideFn = _ref4.overrideFn,
      internalAuthTokenProvider = _ref4.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn });

  return {
    docs: require("./endpoints/coltrane/docs")({ client: client }),
    paths: require("./endpoints/coltrane/paths")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createAccounts(_ref5) {
  var baseURL = _ref5.baseURL,
      headers = _ref5.headers,
      timeout = _ref5.timeout,
      overrideFn = _ref5.overrideFn,
      internalAuthTokenProvider = _ref5.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn });

  return {
    docs: require("./endpoints/accounts/docs")({ client: client }),
    trustedMachines: require("./endpoints/accounts/trusted-machines")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    lexicons: require("./endpoints/accounts/lexicons")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    shifts: require("./endpoints/accounts/shifts")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    currentShifts: require("./endpoints/accounts/current-shifts")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    applications: require("./endpoints/accounts/applications")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    applicationSettings: require("./endpoints/accounts/application-settings")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customers: require("./endpoints/accounts/customers")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    users: require("./endpoints/accounts/users")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    accounts: require("./endpoints/accounts/accounts")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    application: require("./endpoints/accounts/application")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createSales(_ref6) {
  var baseURL = _ref6.baseURL,
      headers = _ref6.headers,
      timeout = _ref6.timeout,
      overrideFn = _ref6.overrideFn,
      internalAuthTokenProvider = _ref6.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn });

  return {
    docs: require("./endpoints/sales/docs")({ client: client }),
    paymentProviders: require("./endpoints/sales/payment-providers")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    cart: require("./endpoints/sales/cart")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    giftCertificates: require("./endpoints/sales/gift-certificates")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customFields: require("./endpoints/sales/custom-fields")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    order: require("./endpoints/sales/order")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    voucher: require("./endpoints/sales/voucher")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    cartPromo: require("./endpoints/sales/cart-promo")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    bundles: require("./endpoints/sales/bundles")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    redeemableItems: require("./endpoints/sales/redeemable-items")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    flexpasses: require("./endpoints/sales/flexpasses")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    syncEntry: require("./endpoints/sales/sync-entry")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createOperations(_ref7) {
  var baseURL = _ref7.baseURL,
      headers = _ref7.headers,
      timeout = _ref7.timeout,
      overrideFn = _ref7.overrideFn,
      internalAuthTokenProvider = _ref7.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn });

  return {
    docs: require("./endpoints/operations/docs")({ client: client }),
    flexpasses: require("./endpoints/operations/flexpasses")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    parcel: require("./endpoints/operations/parcels")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    appliedInsurance: require("./endpoints/operations/applied_insurance")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    transaction: require("./endpoints/operations/transaction")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    transactions: require("./endpoints/operations/transactions")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    tickets: require("./endpoints/operations/tickets")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    manifest: require("./endpoints/operations/manifest")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    calendarEntries: require("./endpoints/operations/calendar_entries")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    redemption: require("./endpoints/operations/redemption")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    tripChangeInfo: require("./endpoints/operations/trip_change_info")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    segments: require("./endpoints/operations/segments")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    loans: require("./endpoints/operations/loans")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    movements: require("./endpoints/operations/movements")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    scheduledNotifications: require("./endpoints/operations/scheduled_notifications")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createReports(_ref8) {
  var baseURL = _ref8.baseURL,
      headers = _ref8.headers,
      timeout = _ref8.timeout,
      overrideFn = _ref8.overrideFn,
      internalAuthTokenProvider = _ref8.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn });

  return {
    reportTypes: require("./endpoints/reports/report-types")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customReports: require("./endpoints/reports/custom-reports")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createNotifications(_ref9) {
  var baseURL = _ref9.baseURL,
      headers = _ref9.headers,
      timeout = _ref9.timeout,
      overrideFn = _ref9.overrideFn,
      internalAuthTokenProvider = _ref9.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn });

  return {
    manifestNotifications: require("./endpoints/notifications/manifest-notifications")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    printedTickets: require("./endpoints/notifications/printed-tickets")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    email: require("./endpoints/notifications/email")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customers: require("./endpoints/notifications/customers")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createUploads(_ref10) {
  var baseURL = _ref10.baseURL,
      headers = _ref10.headers,
      timeout = _ref10.timeout,
      overrideFn = _ref10.overrideFn,
      internalAuthTokenProvider = _ref10.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn });

  return {
    files: require("./endpoints/uploads/files")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    images: require("./endpoints/uploads/images")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createLoyalty(_ref11) {
  var baseURL = _ref11.baseURL,
      headers = _ref11.headers,
      timeout = _ref11.timeout,
      overrideFn = _ref11.overrideFn,
      internalAuthTokenProvider = _ref11.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn });

  return {
    programs: require("./endpoints/loyalty/programs")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    movements: require("./endpoints/loyalty/movements")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createWebhooks(_ref12) {
  var baseURL = _ref12.baseURL,
      headers = _ref12.headers,
      timeout = _ref12.timeout,
      overrideFn = _ref12.overrideFn,
      internalAuthTokenProvider = _ref12.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn });

  return {
    subscriptions: require("./endpoints/webhooks/subscriptions")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    events: require("./endpoints/webhooks/events")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    undelivered: require("./endpoints/webhooks/undelivered")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    webhooks: require("./endpoints/webhooks/webhooks")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createSeatmaps(_ref13) {
  var baseURL = _ref13.baseURL,
      headers = _ref13.headers,
      timeout = _ref13.timeout,
      overrideFn = _ref13.overrideFn,
      internalAuthTokenProvider = _ref13.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn });

  return {
    accessTicket: require("./endpoints/seatmaps/access-ticket")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    seat: require("./endpoints/seatmaps/seat")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createBtrzPay(_ref14) {
  var baseURL = _ref14.baseURL,
      headers = _ref14.headers,
      timeout = _ref14.timeout,
      overrideFn = _ref14.overrideFn,
      internalAuthTokenProvider = _ref14.internalAuthTokenProvider;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn });

  return {
    docs: require("./endpoints/btrzpay/docs")({ client: client }),
    paymentMethods: require("./endpoints/btrzpay/payment-methods")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    referenceNumbers: require("./endpoints/btrzpay/reference-numbers")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    payments: require("./endpoints/btrzpay/payments")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    referencedPayments: require("./endpoints/btrzpay/referenced-payments")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customers: require("./endpoints/btrzpay/customers")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customerCards: require("./endpoints/btrzpay/customerCards")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    squareTerminals: require("./endpoints/btrzpay/square").squareTerminalsFactory({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    squareWebhooks: require("./endpoints/btrzpay/square").squareWebhooksFactory({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
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
  var _ref15 = options || productionOptions,
      baseURL = _ref15.baseURL,
      _ref15$baseURLOverrid = _ref15.baseURLOverride,
      baseURLOverride = _ref15$baseURLOverrid === undefined ? {} : _ref15$baseURLOverrid,
      headers = _ref15.headers,
      _ref15$timeout = _ref15.timeout,
      timeout = _ref15$timeout === undefined ? 0 : _ref15$timeout,
      internalAuthTokenProvider = _ref15.internalAuthTokenProvider;

  return {
    constants: require("./constants"),
    _cleanClient: clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout }),
    inventory: _extends({}, createInventory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.inventory, internalAuthTokenProvider: internalAuthTokenProvider }), createTrips({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.trips, internalAuthTokenProvider: internalAuthTokenProvider })),
    coltrane: createColtrane({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.coltrane, internalAuthTokenProvider: internalAuthTokenProvider }),
    accounts: createAccounts({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.accounts, internalAuthTokenProvider: internalAuthTokenProvider }),
    sales: createSales({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.sales, internalAuthTokenProvider: internalAuthTokenProvider }),
    operations: createOperations({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.operations, internalAuthTokenProvider: internalAuthTokenProvider }),
    reports: createReports({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.reports, internalAuthTokenProvider: internalAuthTokenProvider }),
    notifications: createNotifications({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.notifications, internalAuthTokenProvider: internalAuthTokenProvider }),
    uploads: createUploads({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.uploads, internalAuthTokenProvider: internalAuthTokenProvider }),
    loyalty: createLoyalty({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.loyalty, internalAuthTokenProvider: internalAuthTokenProvider }),
    webhooks: createWebhooks({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.webhooks, internalAuthTokenProvider: internalAuthTokenProvider }),
    seatmaps: createSeatmaps({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.seatmaps, internalAuthTokenProvider: internalAuthTokenProvider }),
    btrzpay: createBtrzPay({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.btrzpay, internalAuthTokenProvider: internalAuthTokenProvider })
  };
}

module.exports = { clientFactory: clientFactory, createApiClient: createApiClient };