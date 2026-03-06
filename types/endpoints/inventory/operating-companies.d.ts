export = operatingCompaniesFactory;
/**
 * @typedef {Object} OperatingCompaniesQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for operating-companies API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function, get: function, sequences: object }}
 */
declare function operatingCompaniesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    create: Function;
    update: Function;
    get: Function;
    sequences: object;
};
declare namespace operatingCompaniesFactory {
    export { OperatingCompaniesQuery };
}
type OperatingCompaniesQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
