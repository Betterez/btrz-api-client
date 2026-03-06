export = amenitiesFactory;
/**
 * @typedef {Object} AmenitiesQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for amenities API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function }}
 */
declare function amenitiesFactory({ client, internalAuthTokenProvider }: {
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
declare namespace amenitiesFactory {
    export { AmenitiesQuery };
}
type AmenitiesQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
