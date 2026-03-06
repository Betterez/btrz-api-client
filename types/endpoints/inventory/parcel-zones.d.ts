export = parcelZonesFactory;
/**
 * Query params for parcel-zones endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryParcelZonesQuery
 */
/**
 * Factory for parcel-zones API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, update: function }}
 */
declare function parcelZonesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    create: Function;
    update: Function;
};
declare namespace parcelZonesFactory {
    export { InventoryParcelZonesQuery };
}
/**
 * Query params for parcel-zones endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryParcelZonesQuery = any;
