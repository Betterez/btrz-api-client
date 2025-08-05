const axios = require("axios");
const productionOptions = require("./productionDefaults.js");

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
  const {baseURL, headers, timeout, overrideFn, agents} = opts;
  const url = overrideFn ? overrideFn(baseURL) : baseURL;

  /** @type {import("axios").AxiosRequestConfig} */
  let options = {
    baseURL: url,
    timeout,
    headers: {
      "Accept": "application/json"
    }
  };
  if (headers && headers["x-amzn-trace-id"]) {
    options.headers["x-amzn-trace-id"] = headers["x-amzn-trace-id"];
  }

  if (agents && (agents.httpAgent || agents.httpsAgent)) {
    options = {
      ...options,
      ...agents
    };
  }
  return axios.create(options);
}

/** MODULES */

function createInventory({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    docs: require("./endpoints/inventory/docs.js")({client}),
    customFields: require("./endpoints/inventory/custom-fields.js")({client, internalAuthTokenProvider}),
    products: require("./endpoints/inventory/products.js")({client, internalAuthTokenProvider}),
    insurances: require("./endpoints/inventory/insurances.js")({client, internalAuthTokenProvider}),
    insurancesCost: require("./endpoints/inventory/insurancesCost.js")({client, internalAuthTokenProvider}),
    stations: require("./endpoints/inventory/stations.js")({client, internalAuthTokenProvider}),
    stationsProvinces: require("./endpoints/inventory/stations-provinces.js")({client, internalAuthTokenProvider}),
    stationsTypes: require("./endpoints/inventory/stations-types.js")({client, internalAuthTokenProvider}),
    stationsZones: require("./endpoints/inventory/stations-zones.js")({client, internalAuthTokenProvider}),
    parcelZones: require("./endpoints/inventory/parcel-zones.js")({client, internalAuthTokenProvider}),
    countries: require("./endpoints/inventory/countries.js")({client, internalAuthTokenProvider}),
    controlClasses: require("./endpoints/inventory/control-classes.js")({client, internalAuthTokenProvider}),
    fares: require("./endpoints/inventory/fares.js")({client, internalAuthTokenProvider}),
    promos: require("./endpoints/inventory/promos.js")({client, internalAuthTokenProvider}),
    labels: require("./endpoints/inventory/labels.js")({client, internalAuthTokenProvider}),
    taxes: require("./endpoints/inventory/taxes.js")({client, internalAuthTokenProvider}),
    seatmaps: require("./endpoints/inventory/seatmaps.js")({client, internalAuthTokenProvider}),
    fees: require("./endpoints/inventory/fees.js")({client, internalAuthTokenProvider}),
    items: require("./endpoints/inventory/items.js")({client, internalAuthTokenProvider}),
    externalPasses: require("./endpoints/inventory/external-passes.js")({client, internalAuthTokenProvider}),
    filteredTrips: require("./endpoints/inventory/filtered-trips.js")({client, internalAuthTokenProvider}),
    filteredTripsV2: require("./endpoints/inventory/filtered-trips-v2.js")({client, internalAuthTokenProvider}),
    ssrs: require("./endpoints/inventory/ssrs.js")({client, internalAuthTokenProvider}),
    fareClasses: require("./endpoints/inventory/fare-classes.js")({client, internalAuthTokenProvider}),
    journeyPrices: require("./endpoints/inventory/journey-prices.js")({client, internalAuthTokenProvider}),
    brands: require("./endpoints/inventory/brands.js")({client, internalAuthTokenProvider}),
    banks: require("./endpoints/inventory/banks.js")({client, internalAuthTokenProvider}),
    operatingCompanies: require("./endpoints/inventory/operating-companies.js")({client, internalAuthTokenProvider}),
    operationMessages: require("./endpoints/inventory/operation-messages.js")({client, internalAuthTokenProvider}),
    paymentTerminals: require("./endpoints/inventory/payment-terminals.js")({client, internalAuthTokenProvider}),
    payOnAccounts: require("./endpoints/inventory/pay-on-accounts.js")({client, internalAuthTokenProvider}),
    mitTerminals: require("./endpoints/inventory/mit-terminals.js")({client, internalAuthTokenProvider}),
    serviceTypes: require("./endpoints/inventory/service-types.js")({client, internalAuthTokenProvider}),
    customContent: require("./endpoints/inventory/custom-content.js")({client, internalAuthTokenProvider}),
    seatfees: require("./endpoints/inventory/seatfees.js")({client, internalAuthTokenProvider}),
    routes: require("./endpoints/inventory/routes.js")({client, internalAuthTokenProvider}),
    bareRoutes: require("./endpoints/inventory/bare-routes.js")({client, internalAuthTokenProvider}),
    schedules: require("./endpoints/inventory/schedules.js")({client, internalAuthTokenProvider}),
    garages: require("./endpoints/inventory/garages.js")({client, internalAuthTokenProvider}),
    serviceNumbers: require("./endpoints/inventory/service-numbers.js")({client, internalAuthTokenProvider}),
    companies: require("./endpoints/inventory/companies.js")({client, internalAuthTokenProvider}),
    bundleFares: require("./endpoints/inventory/bundle-fares.js")({client, internalAuthTokenProvider}),
    giftCertificateDefinitions: require("./endpoints/inventory/gift-certificate-definitions.js")({client, internalAuthTokenProvider}),
    amenities: require("./endpoints/inventory/amenities.js")({client, internalAuthTokenProvider}),
    amenityGroups: require("./endpoints/inventory/amenity-groups.js")({client, internalAuthTokenProvider}),
    scheduleGroups: require("./endpoints/inventory/schedule-groups.js")({client, internalAuthTokenProvider}),
    bundles: require("./endpoints/inventory/bundles.js")({client, internalAuthTokenProvider}),
    stationGroups: require("./endpoints/inventory/station-groups.js")({client, internalAuthTokenProvider}),
    zonePrices: require("./endpoints/inventory/zone-prices.js")({client, internalAuthTokenProvider}),
    zonePriceOverages: require("./endpoints/inventory/zone-price-overages.js")({client, internalAuthTokenProvider}),
    travellerCardProviders: require("./endpoints/inventory/traveller-card-providers.js")({client, internalAuthTokenProvider}),
    travellerCardProvidersTypes: require("./endpoints/inventory/traveller-card-providers-types.js")({client, internalAuthTokenProvider}),
    travellerCardTypes: require("./endpoints/inventory/traveller-card-types.js")({client, internalAuthTokenProvider}),
    travelRoutes: require("./endpoints/inventory/travel-routes.js")({client, internalAuthTokenProvider}),
    marketplaceModifiers: require("./endpoints/inventory/marketplace-modifiers.js")({client, internalAuthTokenProvider}),
    healthCheck: require("./endpoints/inventory/healthcheck.js")({client, internalAuthTokenProvider}),
    maritalStatus: require("./endpoints/inventory/marital-status.js")({client, internalAuthTokenProvider}),
    documentTypes: require("./endpoints/inventory/document-types.js")({client, internalAuthTokenProvider}),
    vehicles: require("./endpoints/inventory/vehicles.js")({client, internalAuthTokenProvider}),
    seatClasses: require("./endpoints/inventory/seatclasses.js")({client, internalAuthTokenProvider}),
    segmentsInformation: require("./endpoints/inventory/segments-information.js")({client, internalAuthTokenProvider}),
    mitTerminalsSettings: require("./endpoints/inventory/mit-terminal-settings.js")({client, internalAuthTokenProvider}),
    financingCosts: require("./endpoints/inventory/financing-costs.js")({client, internalAuthTokenProvider}),
    prismaTerminals: require("./endpoints/inventory/prisma-terminals.js")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createTrips({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    trips: require("./endpoints/inventory/trips.js")({client, internalAuthTokenProvider}),
    segmentsInformationTables: require("./endpoints/inventory/segments-information-tables.js")({client, internalAuthTokenProvider}),
    __test_trips: {
      client
    }
  };
}

function createColtrane({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    docs: require("./endpoints/coltrane/docs.js")({client}),
    paths: require("./endpoints/coltrane/paths.js")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createAccounts({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    accounts: require("./endpoints/accounts/accounts.js")({client, internalAuthTokenProvider}),
    application: require("./endpoints/accounts/application.js")({client, internalAuthTokenProvider}),
    applications: require("./endpoints/accounts/applications.js")({client, internalAuthTokenProvider}),
    applicationSettings: require("./endpoints/accounts/application-settings.js")({client, internalAuthTokenProvider}),
    customers: require("./endpoints/accounts/customers.js")({client, internalAuthTokenProvider}),
    currentShifts: require("./endpoints/accounts/current-shifts.js")({client, internalAuthTokenProvider}),
    docs: require("./endpoints/accounts/docs.js")({
      client
    }),
    domains: require("./endpoints/accounts/domains.js")({client, internalAuthTokenProvider}),
    dynamicForms: require("./endpoints/accounts/dynamic-forms.js")({client, internalAuthTokenProvider}),
    emailSettings: require("./endpoints/accounts/email-settings.js")({client, internalAuthTokenProvider}),
    exchangeRates: require("./endpoints/accounts/exchange-rates.js")({client, internalAuthTokenProvider}),
    exchangeReceipts: require("./endpoints/accounts/exchange-receipts.js")({client, internalAuthTokenProvider}),
    goalSettings: require("./endpoints/accounts/goal-settings.js")({client, internalAuthTokenProvider}),
    images: require("./endpoints/accounts/images.js")({client, internalAuthTokenProvider}),
    interline: require("./endpoints/accounts/interline.js")({client, internalAuthTokenProvider}),
    lexicons: require("./endpoints/accounts/lexicons.js")({client, internalAuthTokenProvider}),
    network: require("./endpoints/accounts/network.js")({client, internalAuthTokenProvider}),
    operationSettings: require("./endpoints/accounts/operation-settings.js")({client, internalAuthTokenProvider}),
    peopleLookups: require("./endpoints/accounts/people-lookups.js")({
      client, internalAuthTokenProvider
    }),
    pointToPointSettings: require("./endpoints/accounts/point-to-point-settings.js")({client, internalAuthTokenProvider}),
    marketPricingSettings: require("./endpoints/accounts/market-pricing-settings.js")({client, internalAuthTokenProvider}),
    printers: require("./endpoints/accounts/printers.js")({
      client, internalAuthTokenProvider
    }),
    printSettings: require("./endpoints/accounts/print-settings.js")({
      client, internalAuthTokenProvider
    }),
    printTemplates: require("./endpoints/accounts/print-templates.js")({
      client, internalAuthTokenProvider
    }),
    revenueManagementSettings: require("./endpoints/accounts/rms-settings.js")({client, internalAuthTokenProvider}),
    journeyPricesSettings: require("./endpoints/accounts/journey-prices-settings.js")({client, internalAuthTokenProvider}),
    subPrintTemplates: require("./endpoints/accounts/sub-print-templates.js")({
      client, internalAuthTokenProvider
    }),
    s3Buckets: require("./endpoints/accounts/s3buckets.js")({client, internalAuthTokenProvider}),
    shifts: require("./endpoints/accounts/shifts.js")({client, internalAuthTokenProvider}),
    shiftSettings: require("./endpoints/accounts/shift-settings.js")({client, internalAuthTokenProvider}),
    ticketMovementSettings: require("./endpoints/accounts/ticket-movement-settings.js")({client, internalAuthTokenProvider}),
    tokens: require("./endpoints/accounts/tokens.js")({client, internalAuthTokenProvider}),
    travellers: require("./endpoints/accounts/travellers.js")({
      client, internalAuthTokenProvider
    }),
    trustedMachines: require("./endpoints/accounts/trusted-machines.js")({client, internalAuthTokenProvider}),
    twilioSettings: require("./endpoints/accounts/twilio-settings.js")({client, internalAuthTokenProvider}),
    users: require("./endpoints/accounts/users.js")({client, internalAuthTokenProvider}),
    __test: {
      client
    },
    websalesConfig: require("./endpoints/accounts/websales-config.js")({client, internalAuthTokenProvider}),
    transportRegulationSettingsForCNRT: require("./endpoints/accounts/transport-regulation-settings.js")({
      client, internalAuthTokenProvider
    })

  };
}

function createSales({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    docs: require("./endpoints/sales/docs.js")({client}),
    parcelQuotes: require("./endpoints/sales/parcel-quotes.js")({client, internalAuthTokenProvider}),
    paymentProviders: require("./endpoints/sales/payment-providers.js")({client, internalAuthTokenProvider}),
    cart: require("./endpoints/sales/cart.js")({client, internalAuthTokenProvider}),
    giftCertificates: require("./endpoints/sales/gift-certificates.js")({client, internalAuthTokenProvider}),
    customFields: require("./endpoints/sales/custom-fields.js")({client, internalAuthTokenProvider}),
    order: require("./endpoints/sales/order.js")({client, internalAuthTokenProvider}),
    voucher: require("./endpoints/sales/voucher.js")({client, internalAuthTokenProvider}),
    cartPromo: require("./endpoints/sales/cart-promo.js")({client, internalAuthTokenProvider}),
    bundles: require("./endpoints/sales/bundles.js")({client, internalAuthTokenProvider}),
    redeemableItems: require("./endpoints/sales/redeemable-items.js")({client, internalAuthTokenProvider}),
    flexpasses: require("./endpoints/sales/flexpasses.js")({client, internalAuthTokenProvider}),
    syncEntry: require("./endpoints/sales/sync-entry.js")({client, internalAuthTokenProvider}),
    checkInInfo: require("./endpoints/sales/check-in-info.js")({client, internalAuthTokenProvider}),
    cancellations: require("./endpoints/sales/cancellations.js")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createOperations({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    docs: require("./endpoints/operations/docs.js")({client}),
    accountingItems: require("./endpoints/operations/accounting_items.js")({client, internalAuthTokenProvider}),
    appliedInsurance: require("./endpoints/operations/applied_insurance.js")({client, internalAuthTokenProvider}),
    calendarEntries: require("./endpoints/operations/calendar_entries.js")({client, internalAuthTokenProvider}),
    externalBookings: require("./endpoints/operations/external-bookings.js")({client, internalAuthTokenProvider}),
    flexpasses: require("./endpoints/operations/flexpasses.js")({client, internalAuthTokenProvider}),
    loans: require("./endpoints/operations/loans.js")({client, internalAuthTokenProvider}),
    manifest: require("./endpoints/operations/manifest.js")({client, internalAuthTokenProvider}),
    manifestLegForTickets: require("./endpoints/operations/manifest_leg_for_tickets.js")({client, internalAuthTokenProvider}),
    movements: require("./endpoints/operations/movements.js")({client, internalAuthTokenProvider}),
    outlookTrips: require("./endpoints/operations/outlook-trips.js")({client, internalAuthTokenProvider}),
    parcel: require("./endpoints/operations/parcels.js")({client, internalAuthTokenProvider}),
    parcelManifests: require("./endpoints/operations/parcels_manifests.js")({client, internalAuthTokenProvider}),
    passengerCheckInInfo: require("./endpoints/operations/passenger_check_in_info.js")({client, internalAuthTokenProvider}),
    redemption: require("./endpoints/operations/redemption.js")({client, internalAuthTokenProvider}),
    rms: require("./endpoints/operations/rms.js")({client, internalAuthTokenProvider}),
    scheduledNotifications: require("./endpoints/operations/scheduled_notifications.js")({client, internalAuthTokenProvider}),
    segments: require("./endpoints/operations/segments.js")({client, internalAuthTokenProvider}),
    soldItemsFulfillment: require("./endpoints/operations/sold-items-fulfillment.js")({client, internalAuthTokenProvider}),
    soldItems: require("./endpoints/operations/sold-items.js")({client, internalAuthTokenProvider}),
    tickets: require("./endpoints/operations/tickets.js")({client, internalAuthTokenProvider}),
    transaction: require("./endpoints/operations/transaction.js")({client, internalAuthTokenProvider}),
    transactions: require("./endpoints/operations/transactions.js")({client, internalAuthTokenProvider}),
    tripChangeInfo: require("./endpoints/operations/trip_change_info.js")({client, internalAuthTokenProvider}),
    vehicleAssignments: require("./endpoints/operations/vehicle_assignments.js")({client, internalAuthTokenProvider}),
    vouchers: require("./endpoints/operations/vouchers.js")({client, internalAuthTokenProvider}),
    waitlists: require("./endpoints/operations/waitlists.js")({client, internalAuthTokenProvider}),
    transportRegulations: require("./endpoints/operations/transport_regulations.js")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createReports({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    reportTypes: require("./endpoints/reports/report-types.js")({client, internalAuthTokenProvider}),
    customReports: require("./endpoints/reports/custom-reports.js")({client, internalAuthTokenProvider}),
    reportEmail: require("./endpoints/reports/email.js")({client, internalAuthTokenProvider}),
    __test: {
      client
    }

  };
}

function createNotifications({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    manifestNotifications: require("./endpoints/notifications/manifest-notifications.js")({client, internalAuthTokenProvider}),
    printedTickets: require("./endpoints/notifications/printed-tickets.js")({client, internalAuthTokenProvider}),
    pdfs: require("./endpoints/notifications/pdfs.js")({client, internalAuthTokenProvider}),
    pdfData: require("./endpoints/notifications/pdf-data.js")({client, internalAuthTokenProvider}),
    email: require("./endpoints/notifications/email.js")({client, internalAuthTokenProvider}),
    customers: require("./endpoints/notifications/customers.js")({client, internalAuthTokenProvider}),
    twilio: require("./endpoints/notifications/twilio.js")({client, internalAuthTokenProvider}),
    notify: require("./endpoints/notifications/notify-tickets.js")({client, internalAuthTokenProvider}),
    ordersRulesValidations: require("./endpoints/notifications/orders-rules-validations.js")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createUploads({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    files: require("./endpoints/uploads/files.js")({client, internalAuthTokenProvider}),
    images: require("./endpoints/uploads/images.js")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createLoyalty({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    programs: require("./endpoints/loyalty/programs.js")({client, internalAuthTokenProvider}),
    movements: require("./endpoints/loyalty/movements.js")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createWebhooks({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    subscriptions: require("./endpoints/webhooks/subscriptions.js")({client, internalAuthTokenProvider}),
    events: require("./endpoints/webhooks/events.js")({client, internalAuthTokenProvider}),
    undelivered: require("./endpoints/webhooks/undelivered.js")({client, internalAuthTokenProvider}),
    webhooks: require("./endpoints/webhooks/webhooks.js")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createSeatmaps({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    accessTicket: require("./endpoints/seatmaps/access-ticket.js")({client, internalAuthTokenProvider}),
    seat: require("./endpoints/seatmaps/seat.js")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createBtrzPay({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    docs: require("./endpoints/btrzpay/docs.js")({client}),
    cardpointeTerminals: require("./endpoints/btrzpay/cardpointe.js").cardpointeTerminalsFactory({client, internalAuthTokenProvider}),
    paymentMethods: require("./endpoints/btrzpay/payment-methods.js")({client, internalAuthTokenProvider}),
    referenceNumbers: require("./endpoints/btrzpay/reference-numbers.js")({client, internalAuthTokenProvider}),
    payments: require("./endpoints/btrzpay/payments.js")({client, internalAuthTokenProvider}),
    referencedPayments: require("./endpoints/btrzpay/referenced-payments.js")({client, internalAuthTokenProvider}),
    customers: require("./endpoints/btrzpay/customers.js")({client, internalAuthTokenProvider}),
    customerCards: require("./endpoints/btrzpay/customerCards.js")({client, internalAuthTokenProvider}),
    squareTerminals: require("./endpoints/btrzpay/square.js").squareTerminalsFactory({client, internalAuthTokenProvider}),
    squareWebhooks: require("./endpoints/btrzpay/square.js").squareWebhooksFactory({client, internalAuthTokenProvider}),
    oxxo: require("./endpoints/btrzpay/oxxo.js")({client, internalAuthTokenProvider}),
    datalogic: require("./endpoints/btrzpay/datalogic.js")({client, internalAuthTokenProvider}),
    prismaTerminals: require("./endpoints/btrzpay/prismaTerminals.js")({client, internalAuthTokenProvider}),
    terminalPayments: require("./endpoints/btrzpay/terminalPayments.js")({ client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createInvoices({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    docs: require("./endpoints/invoices/docs.js")({client}),
    providers: require("./endpoints/invoices/providers.js")({client, internalAuthTokenProvider}),
    providersSequences: require("./endpoints/invoices/providersSequences.js")({client, internalAuthTokenProvider}),
    infile: require("./endpoints/invoices/infile.js")({client, internalAuthTokenProvider}),
    system: require("./endpoints/invoices/system.js")({client, internalAuthTokenProvider}),
    dlink: require("./endpoints/invoices/dlink.js")({client, internalAuthTokenProvider}),
    gti: require("./endpoints/invoices/gti.js")({client, internalAuthTokenProvider}),
    pdfs: require("./endpoints/invoices/pdfs.js")({client, internalAuthTokenProvider}),
    emails: require("./endpoints/invoices/emails.js")({client, internalAuthTokenProvider}),
    taxIds: require("./endpoints/invoices/tax-ids.js")({client, internalAuthTokenProvider}),
    invoices: require("./endpoints/invoices/invoices.js")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createGPS({baseURL, headers, timeout, overrideFn, internalAuthTokenProvider, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});

  return {
    scannerAppLocation: require("./endpoints/gps/scanner-app-location.js")({client, internalAuthTokenProvider}),
    __test: {
      client
    }
  };
}

function createRatality({baseURL, headers, timeout, overrideFn, agents}) {
  const client = clientFactory({baseURL, headers, timeout, overrideFn, agents});
  const version = "v2";

  return {
    auth: require("./endpoints/ratality/auth.js")({client}),
    clients: require("./endpoints/ratality/clients.js")({client, version}),
    integrations: require("./endpoints/ratality/integrations.js")({client, version}),
    __test: {
      client
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
  const {baseURL, baseURLOverride = {}, headers, timeout = 0, internalAuthTokenProvider, agents} = options || productionOptions;

  return {
    constants: require("./constants.js"),
    _cleanClient: clientFactory({baseURL, headers, timeout, agents}),
    inventory: {
      ...createInventory({baseURL, headers, timeout, overrideFn: baseURLOverride.inventory, internalAuthTokenProvider, agents}),
      ...createTrips({baseURL, headers, timeout, overrideFn: baseURLOverride.trips, internalAuthTokenProvider, agents})
    },
    coltrane: createColtrane({baseURL, headers, timeout, overrideFn: baseURLOverride.coltrane, internalAuthTokenProvider, agents}),
    accounts: createAccounts({baseURL, headers, timeout, overrideFn: baseURLOverride.accounts, internalAuthTokenProvider, agents}),
    sales: createSales({baseURL, headers, timeout, overrideFn: baseURLOverride.sales, internalAuthTokenProvider, agents}),
    operations: createOperations({baseURL, headers, timeout, overrideFn: baseURLOverride.operations, internalAuthTokenProvider, agents}),
    reports: createReports({baseURL, headers, timeout, overrideFn: baseURLOverride.reports, internalAuthTokenProvider, agents}),
    // eslint-disable-next-line max-len
    notifications: createNotifications({baseURL, headers, timeout, overrideFn: baseURLOverride.notifications, internalAuthTokenProvider, agents}),
    uploads: createUploads({baseURL, headers, timeout, overrideFn: baseURLOverride.uploads, internalAuthTokenProvider, agents}),
    loyalty: createLoyalty({baseURL, headers, timeout, overrideFn: baseURLOverride.loyalty, internalAuthTokenProvider, agents}),
    webhooks: createWebhooks({baseURL, headers, timeout, overrideFn: baseURLOverride.webhooks, internalAuthTokenProvider, agents}),
    seatmaps: createSeatmaps({baseURL, headers, timeout, overrideFn: baseURLOverride.seatmaps, internalAuthTokenProvider, agents}),
    btrzpay: createBtrzPay({baseURL, headers, timeout, overrideFn: baseURLOverride.btrzpay, internalAuthTokenProvider, agents}),
    invoices: createInvoices({baseURL, headers, timeout, overrideFn: baseURLOverride.invoices, internalAuthTokenProvider, agents}),
    gps: createGPS({baseURL, headers, timeout, overrideFn: baseURLOverride.invoices, internalAuthTokenProvider, agents}),
    ratality: createRatality({baseURL, headers, timeout, overrideFn: baseURLOverride.ratality, agents})
  };
}

module.exports = {clientFactory, createApiClient};
