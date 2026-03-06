export = vehiclesFactory;
/**
 * @typedef {Object} VehiclesQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for vehicles API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function, seatmaps: object }}
 */
declare function vehiclesFactory({ client, internalAuthTokenProvider }: {
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
    seatmaps: object;
};
declare namespace vehiclesFactory {
    export { VehiclesQuery };
}
type VehiclesQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
