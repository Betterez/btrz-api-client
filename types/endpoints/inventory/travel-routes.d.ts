export = travelRoutesFactory;
/**
 * @typedef {Object} TravelRoutesQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for travel-routes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */
declare function travelRoutesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    create: Function;
    update: Function;
};
declare namespace travelRoutesFactory {
    export { TravelRoutesQuery };
}
type TravelRoutesQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
