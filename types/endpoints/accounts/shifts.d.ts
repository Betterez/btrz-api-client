export = shiftsFactory;
/**
 * Factory for shifts API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, requiresAgencyShiftClosure: object, payments: object, transactions: object, tickets: object, fees: object, refunds: object, items: object, redeemableItems: object, giftCertificates: object, parcels: object, insurances: object, invoices: object, deposits: object, manualTickets: object, locationClosures: object, startingBalances: object, purchaseLimitPayments: object, salesSummary: object, commissions: object }}
 */
declare function shiftsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    create: Function;
    update: Function;
    requiresAgencyShiftClosure: object;
    payments: object;
    transactions: object;
    tickets: object;
    fees: object;
    refunds: object;
    items: object;
    redeemableItems: object;
    giftCertificates: object;
    parcels: object;
    insurances: object;
    invoices: object;
    deposits: object;
    manualTickets: object;
    locationClosures: object;
    startingBalances: object;
    purchaseLimitPayments: object;
    salesSummary: object;
    commissions: object;
};
