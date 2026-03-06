export = coltraneFactory;
/**
 * Query params for GET /paths (btrz-api-coltrane).
 * @typedef {Object} ColtranePathsListQuery
 * @property {string} [providerId] - Provider id
 * @property {string} [productId] - Product id
 * @property {string} [originId] - Origin station id
 * @property {string} [destinationId] - Destination station id
 */
/**
 * Factory for Coltrane paths API (btrz-api-coltrane).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function coltraneFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace coltraneFactory {
    export { ColtranePathsListQuery };
}
/**
 * Query params for GET /paths (btrz-api-coltrane).
 */
type ColtranePathsListQuery = {
    /**
     * - Provider id
     */
    providerId?: string;
    /**
     * - Product id
     */
    productId?: string;
    /**
     * - Origin station id
     */
    originId?: string;
    /**
     * - Destination station id
     */
    destinationId?: string;
};
