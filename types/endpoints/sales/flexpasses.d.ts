export = flexpassesEndpointsFactory;
/**
 * @typedef {Object} FlexpassGetQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for flexpasses API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
declare function flexpassesEndpointsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
};
declare namespace flexpassesEndpointsFactory {
    export { FlexpassGetQuery };
}
type FlexpassGetQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
