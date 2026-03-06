export = seatmapsFactory;
/**
 * @typedef {Object} SeatmapsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for seatmaps API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, getById: function, create: function, remove: function, update: function, getOccupiedSeats: function }}
 */
declare function seatmapsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    getById: Function;
    create: Function;
    remove: Function;
    update: Function;
    getOccupiedSeats: Function;
};
declare namespace seatmapsFactory {
    export { SeatmapsQuery };
}
type SeatmapsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
