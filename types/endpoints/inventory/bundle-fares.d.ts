export = bundleFaresFactory;
/**
 * @typedef {Object} BundleFaresQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for bundle-fares API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function bundleFaresFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace bundleFaresFactory {
    export { BundleFaresQuery };
}
type BundleFaresQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
