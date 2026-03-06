export = financingCostsFactory;
/**
 * @typedef {Object} FinancingCostsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for financing-costs API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function financingCostsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    create: Function;
    update: Function;
    remove: Function;
};
declare namespace financingCostsFactory {
    export { FinancingCostsQuery };
}
type FinancingCostsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
