export = giftCertificatesFactory;
/**
 * @typedef {Object} GiftCertificateGetQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for gift-certificates API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
declare function giftCertificatesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
};
declare namespace giftCertificatesFactory {
    export { GiftCertificateGetQuery };
}
type GiftCertificateGetQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
