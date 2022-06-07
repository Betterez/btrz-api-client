"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var axios = require("axios");
var productionOptions = require("./productionDefaults.js");

/**
 * Creates a new axios client
 * @param {Object} opts - Axios configuration
 * @param {string} opts.baseURL - the base url use for all endpoints by default
 * @param {Object} opts.headers - an object of http headers
 * @param {string} opts.timeout - timeout in milliseconds
 * @param {Function} opts.overrideFn - allows to override the baseUrl
 * @param {{httpAgent: import("http").Agent, httpsAgent: import("https").Agent}} opts.agents - An object containg one or both http agents
 * @returns {axios.AxiosInstance} Returns a configured axios instance
*/
function clientFactory(opts) {
  var baseURL = opts.baseURL,
      headers = opts.headers,
      timeout = opts.timeout,
      overrideFn = opts.overrideFn,
      agents = opts.agents;

  var url = overrideFn ? overrideFn(baseURL) : baseURL;

  /** @type {import("axios").AxiosRequestConfig} */
  var options = {
    baseURL: url,
    timeout: timeout,
    headers: {
      "Accept": "application/json"
    }
  };
  if (headers && headers["x-amzn-trace-id"]) {
    options.headers["x-amzn-trace-id"] = headers["x-amzn-trace-id"];
  }

  if (agents && (agents.httpAgent || agents.httpsAgent)) {
    options = _extends({}, options, agents);
  }
  return axios.create(options);
}

/** MODULES */

function createInventory(_ref) {
  var baseURL = _ref.baseURL,
      headers = _ref.headers,
      timeout = _ref.timeout,
      overrideFn = _ref.overrideFn,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider,
      agents = _ref.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    docs: require("./endpoints/inventory/docs.js")({ client: client }),
    products: require("./endpoints/inventory/products.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    insurances: require("./endpoints/inventory/insurances.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    insurancesCost: require("./endpoints/inventory/insurancesCost.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    stations: require("./endpoints/inventory/stations.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    stationsZones: require("./endpoints/inventory/stations-zones.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    parcelZones: require("./endpoints/inventory/parcel-zones.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    countries: require("./endpoints/inventory/countries.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    fares: require("./endpoints/inventory/fares.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    promos: require("./endpoints/inventory/promos.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    taxes: require("./endpoints/inventory/taxes.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    seatmaps: require("./endpoints/inventory/seatmaps.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    fees: require("./endpoints/inventory/fees.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    items: require("./endpoints/inventory/items.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    filteredTrips: require("./endpoints/inventory/filtered-trips.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    filteredTripsV2: require("./endpoints/inventory/filtered-trips-v2.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    ssrs: require("./endpoints/inventory/ssrs.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    fareClasses: require("./endpoints/inventory/fare-classes.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    journeyPrices: require("./endpoints/inventory/journey-prices.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    brands: require("./endpoints/inventory/brands.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    operatingCompanies: require("./endpoints/inventory/operating-companies.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    operationMessages: require("./endpoints/inventory/operation-messages.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    paymentTerminals: require("./endpoints/inventory/payment-terminals.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    serviceTypes: require("./endpoints/inventory/service-types.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customContent: require("./endpoints/inventory/custom-content.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    seatfees: require("./endpoints/inventory/seatfees.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    routes: require("./endpoints/inventory/routes.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    bareRoutes: require("./endpoints/inventory/bare-routes.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    schedules: require("./endpoints/inventory/schedules.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    serviceNumbers: require("./endpoints/inventory/service-numbers.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    companies: require("./endpoints/inventory/companies.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    bundleFares: require("./endpoints/inventory/bundle-fares.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    giftCertificateDefinitions: require("./endpoints/inventory/gift-certificate-definitions.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    amenities: require("./endpoints/inventory/amenities.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    amenityGroups: require("./endpoints/inventory/amenity-groups.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    bundles: require("./endpoints/inventory/bundles.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    stationGroups: require("./endpoints/inventory/station-groups.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    zonePrices: require("./endpoints/inventory/zone-prices.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    zonePriceOverages: require("./endpoints/inventory/zone-price-overages.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    travellerCardProviders: require("./endpoints/inventory/traveller-card-providers.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    travellerCardProvidersTypes: require("./endpoints/inventory/traveller-card-providers-types.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    travellerCardTypes: require("./endpoints/inventory/traveller-card-types.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    marketplaceModifiers: require("./endpoints/inventory/marketplace-modifiers.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    healthCheck: require("./endpoints/inventory/healthcheck.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    maritalStatus: require("./endpoints/inventory/marital-status.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    documentTypes: require("./endpoints/inventory/document-types.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createTrips(_ref2) {
  var baseURL = _ref2.baseURL,
      headers = _ref2.headers,
      timeout = _ref2.timeout,
      overrideFn = _ref2.overrideFn,
      internalAuthTokenProvider = _ref2.internalAuthTokenProvider,
      agents = _ref2.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    trips: require("./endpoints/inventory/trips.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test_trips: {
      client: client
    }
  };
}

function createColtrane(_ref3) {
  var baseURL = _ref3.baseURL,
      headers = _ref3.headers,
      timeout = _ref3.timeout,
      overrideFn = _ref3.overrideFn,
      internalAuthTokenProvider = _ref3.internalAuthTokenProvider,
      agents = _ref3.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    docs: require("./endpoints/coltrane/docs.js")({ client: client }),
    paths: require("./endpoints/coltrane/paths.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createAccounts(_ref4) {
  var baseURL = _ref4.baseURL,
      headers = _ref4.headers,
      timeout = _ref4.timeout,
      overrideFn = _ref4.overrideFn,
      internalAuthTokenProvider = _ref4.internalAuthTokenProvider,
      agents = _ref4.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    accounts: require("./endpoints/accounts/accounts.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    application: require("./endpoints/accounts/application.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    applications: require("./endpoints/accounts/applications.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    applicationSettings: require("./endpoints/accounts/application-settings.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customers: require("./endpoints/accounts/customers.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    currentShifts: require("./endpoints/accounts/current-shifts.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    docs: require("./endpoints/accounts/docs.js")({
      client: client
    }),
    domains: require("./endpoints/accounts/domains")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    emailSettings: require("./endpoints/accounts/email-settings")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    exchangeRates: require("./endpoints/accounts/exchange-rates")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    interline: require("./endpoints/accounts/interline")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    lexicons: require("./endpoints/accounts/lexicons")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    network: require("./endpoints/accounts/network")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    printers: require("./endpoints/accounts/printers")({
      client: client, internalAuthTokenProvider: internalAuthTokenProvider
    }),
    printSettings: require("./endpoints/accounts/print-settings.js")({
      client: client, internalAuthTokenProvider: internalAuthTokenProvider
    }),
    printTemplates: require("./endpoints/accounts/print-templates.js")({
      client: client, internalAuthTokenProvider: internalAuthTokenProvider
    }),
    shifts: require("./endpoints/accounts/shifts.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    travellers: require("./endpoints/accounts/travellers.js")({
      client: client, internalAuthTokenProvider: internalAuthTokenProvider
    }),
    trustedMachines: require("./endpoints/accounts/trusted-machines.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    users: require("./endpoints/accounts/users.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    },
    websalesConfig: require("./endpoints/accounts/websales-config.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider })
  };
}

function createSales(_ref5) {
  var baseURL = _ref5.baseURL,
      headers = _ref5.headers,
      timeout = _ref5.timeout,
      overrideFn = _ref5.overrideFn,
      internalAuthTokenProvider = _ref5.internalAuthTokenProvider,
      agents = _ref5.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    docs: require("./endpoints/sales/docs.js")({ client: client }),
    paymentProviders: require("./endpoints/sales/payment-providers.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    cart: require("./endpoints/sales/cart.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    giftCertificates: require("./endpoints/sales/gift-certificates.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customFields: require("./endpoints/sales/custom-fields.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    order: require("./endpoints/sales/order.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    voucher: require("./endpoints/sales/voucher.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    cartPromo: require("./endpoints/sales/cart-promo.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    bundles: require("./endpoints/sales/bundles.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    redeemableItems: require("./endpoints/sales/redeemable-items.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    flexpasses: require("./endpoints/sales/flexpasses.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    syncEntry: require("./endpoints/sales/sync-entry.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    checkInInfo: require("./endpoints/sales/check-in-info.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    cancellations: require("./endpoints/sales/cancellations.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createOperations(_ref6) {
  var baseURL = _ref6.baseURL,
      headers = _ref6.headers,
      timeout = _ref6.timeout,
      overrideFn = _ref6.overrideFn,
      internalAuthTokenProvider = _ref6.internalAuthTokenProvider,
      agents = _ref6.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    docs: require("./endpoints/operations/docs.js")({ client: client }),
    flexpasses: require("./endpoints/operations/flexpasses.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    parcel: require("./endpoints/operations/parcels.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    appliedInsurance: require("./endpoints/operations/applied_insurance.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    transaction: require("./endpoints/operations/transaction.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    transactions: require("./endpoints/operations/transactions.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    tickets: require("./endpoints/operations/tickets.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    manifest: require("./endpoints/operations/manifest.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    calendarEntries: require("./endpoints/operations/calendar_entries.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    redemption: require("./endpoints/operations/redemption.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    tripChangeInfo: require("./endpoints/operations/trip_change_info.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    segments: require("./endpoints/operations/segments.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    loans: require("./endpoints/operations/loans.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    movements: require("./endpoints/operations/movements.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    scheduledNotifications: require("./endpoints/operations/scheduled_notifications.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    waitlists: require("./endpoints/operations/waitlists.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    accountingItems: require("./endpoints/operations/accounting_items.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    outlookTrips: require("./endpoints/operations/outlook-trips.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    manifestLegForTickets: require("./endpoints/operations/manifest_leg_for_tickets.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createReports(_ref7) {
  var baseURL = _ref7.baseURL,
      headers = _ref7.headers,
      timeout = _ref7.timeout,
      overrideFn = _ref7.overrideFn,
      internalAuthTokenProvider = _ref7.internalAuthTokenProvider,
      agents = _ref7.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    reportTypes: require("./endpoints/reports/report-types.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customReports: require("./endpoints/reports/custom-reports.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createNotifications(_ref8) {
  var baseURL = _ref8.baseURL,
      headers = _ref8.headers,
      timeout = _ref8.timeout,
      overrideFn = _ref8.overrideFn,
      internalAuthTokenProvider = _ref8.internalAuthTokenProvider,
      agents = _ref8.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    manifestNotifications: require("./endpoints/notifications/manifest-notifications.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    printedTickets: require("./endpoints/notifications/printed-tickets.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    pdfs: require("./endpoints/notifications/pdfs.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    pdfData: require("./endpoints/notifications/pdf-data.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    email: require("./endpoints/notifications/email.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customers: require("./endpoints/notifications/customers.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    ordersRulesValidations: require("./endpoints/notifications/orders-rules-validations.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createUploads(_ref9) {
  var baseURL = _ref9.baseURL,
      headers = _ref9.headers,
      timeout = _ref9.timeout,
      overrideFn = _ref9.overrideFn,
      internalAuthTokenProvider = _ref9.internalAuthTokenProvider,
      agents = _ref9.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    files: require("./endpoints/uploads/files.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    images: require("./endpoints/uploads/images.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createLoyalty(_ref10) {
  var baseURL = _ref10.baseURL,
      headers = _ref10.headers,
      timeout = _ref10.timeout,
      overrideFn = _ref10.overrideFn,
      internalAuthTokenProvider = _ref10.internalAuthTokenProvider,
      agents = _ref10.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    programs: require("./endpoints/loyalty/programs.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    movements: require("./endpoints/loyalty/movements.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createWebhooks(_ref11) {
  var baseURL = _ref11.baseURL,
      headers = _ref11.headers,
      timeout = _ref11.timeout,
      overrideFn = _ref11.overrideFn,
      internalAuthTokenProvider = _ref11.internalAuthTokenProvider,
      agents = _ref11.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    subscriptions: require("./endpoints/webhooks/subscriptions.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    events: require("./endpoints/webhooks/events.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    undelivered: require("./endpoints/webhooks/undelivered.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    webhooks: require("./endpoints/webhooks/webhooks.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createSeatmaps(_ref12) {
  var baseURL = _ref12.baseURL,
      headers = _ref12.headers,
      timeout = _ref12.timeout,
      overrideFn = _ref12.overrideFn,
      internalAuthTokenProvider = _ref12.internalAuthTokenProvider,
      agents = _ref12.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    accessTicket: require("./endpoints/seatmaps/access-ticket.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    seat: require("./endpoints/seatmaps/seat.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createBtrzPay(_ref13) {
  var baseURL = _ref13.baseURL,
      headers = _ref13.headers,
      timeout = _ref13.timeout,
      overrideFn = _ref13.overrideFn,
      internalAuthTokenProvider = _ref13.internalAuthTokenProvider,
      agents = _ref13.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    docs: require("./endpoints/btrzpay/docs.js")({ client: client }),
    cardpointeTerminals: require("./endpoints/btrzpay/cardpointe.js").cardpointeTerminalsFactory({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    paymentMethods: require("./endpoints/btrzpay/payment-methods.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    referenceNumbers: require("./endpoints/btrzpay/reference-numbers.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    payments: require("./endpoints/btrzpay/payments.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    referencedPayments: require("./endpoints/btrzpay/referenced-payments.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customers: require("./endpoints/btrzpay/customers.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    customerCards: require("./endpoints/btrzpay/customerCards.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    squareTerminals: require("./endpoints/btrzpay/square.js").squareTerminalsFactory({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    squareWebhooks: require("./endpoints/btrzpay/square.js").squareWebhooksFactory({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createInvoices(_ref14) {
  var baseURL = _ref14.baseURL,
      headers = _ref14.headers,
      timeout = _ref14.timeout,
      overrideFn = _ref14.overrideFn,
      internalAuthTokenProvider = _ref14.internalAuthTokenProvider,
      agents = _ref14.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    docs: require("./endpoints/invoices/docs.js")({ client: client }),
    providers: require("./endpoints/invoices/providers.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    infile: require("./endpoints/invoices/infile.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    pdfs: require("./endpoints/invoices/pdfs.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    emails: require("./endpoints/invoices/emails.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    taxIds: require("./endpoints/invoices/tax-ids.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

function createGPS(_ref15) {
  var baseURL = _ref15.baseURL,
      headers = _ref15.headers,
      timeout = _ref15.timeout,
      overrideFn = _ref15.overrideFn,
      internalAuthTokenProvider = _ref15.internalAuthTokenProvider,
      agents = _ref15.agents;

  var client = clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: overrideFn, agents: agents });

  return {
    scannerAppLocation: require("./endpoints/gps/scanner-app-location.js")({ client: client, internalAuthTokenProvider: internalAuthTokenProvider }),
    __test: {
      client: client
    }
  };
}

/**
 * Returns the apiClient object with defaults set
 *
 * @param {Object}   options
 * @param {string}   options.baseURL - the base url use for all endpoints by default
 * @param {string}   options.timeout
 * @param {Object}   options.baseURLOverride - options object allowing to override baseUrl for some endpoints
 * @param {Function} options.baseURLOverride.someEndpoint
 * @param {Object}   options.internalAuthTokenProvider - an object containing a getToken() function that, when called,
 *                                              returns an authorization token that's valid for making service-to-service API calls.
 * @param {Function} options.internalAuthTokenProvider.getToken
 * @param {{httpAgent: import("http").Agent, httpsAgent: import("https").Agent}} options.agents - An object containg one or both http agents
 */
function createApiClient(options) {
  var _ref16 = options || productionOptions,
      baseURL = _ref16.baseURL,
      _ref16$baseURLOverrid = _ref16.baseURLOverride,
      baseURLOverride = _ref16$baseURLOverrid === undefined ? {} : _ref16$baseURLOverrid,
      headers = _ref16.headers,
      _ref16$timeout = _ref16.timeout,
      timeout = _ref16$timeout === undefined ? 0 : _ref16$timeout,
      internalAuthTokenProvider = _ref16.internalAuthTokenProvider,
      agents = _ref16.agents;

  return {
    constants: require("./constants.js"),
    _cleanClient: clientFactory({ baseURL: baseURL, headers: headers, timeout: timeout, agents: agents }),
    inventory: _extends({}, createInventory({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.inventory, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents }), createTrips({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.trips, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents })),
    coltrane: createColtrane({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.coltrane, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents }),
    accounts: createAccounts({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.accounts, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents }),
    sales: createSales({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.sales, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents }),
    operations: createOperations({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.operations, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents }),
    reports: createReports({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.reports, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents }),
    // eslint-disable-next-line max-len
    notifications: createNotifications({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.notifications, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents }),
    uploads: createUploads({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.uploads, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents }),
    loyalty: createLoyalty({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.loyalty, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents }),
    webhooks: createWebhooks({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.webhooks, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents }),
    seatmaps: createSeatmaps({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.seatmaps, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents }),
    btrzpay: createBtrzPay({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.btrzpay, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents }),
    invoices: createInvoices({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.invoices, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents }),
    gps: createGPS({ baseURL: baseURL, headers: headers, timeout: timeout, overrideFn: baseURLOverride.invoices, internalAuthTokenProvider: internalAuthTokenProvider, agents: agents })
  };
}

module.exports = { clientFactory: clientFactory, createApiClient: createApiClient };