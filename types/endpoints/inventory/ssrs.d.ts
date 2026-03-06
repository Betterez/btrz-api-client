export = ssrsFactory;
/**
 * Query params for ssrs endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventorySsrsQuery
 */
/**
 * Factory for ssrs API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function ssrsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace ssrsFactory {
    export { InventorySsrsQuery };
}
/**
 * Query params for ssrs endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventorySsrsQuery = any;
