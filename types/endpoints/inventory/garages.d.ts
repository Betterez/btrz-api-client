export = garagesFactory;
/**
 * @typedef {Object} GaragesQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for garages API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function garagesFactory({ client, internalAuthTokenProvider }: {
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
declare namespace garagesFactory {
    export { GaragesQuery };
}
type GaragesQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
