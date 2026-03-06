export = exchangeRatesFactory;
/**
 * Factory for exchange-rates API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ allByIsoCode: function, create: function }}
 */
declare function exchangeRatesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    allByIsoCode: Function;
    create: Function;
};
