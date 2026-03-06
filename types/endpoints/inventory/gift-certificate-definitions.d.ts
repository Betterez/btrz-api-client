export = giftCertificateDefinitionsFactory;
/**
 * Query params for gift-certificate-definitions endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryGiftCertificateDefinitionsQuery
 */
/**
 * Factory for gift-certificate-definitions API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function giftCertificateDefinitionsFactory({ client, internalAuthTokenProvider }: {
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
declare namespace giftCertificateDefinitionsFactory {
    export { InventoryGiftCertificateDefinitionsQuery };
}
/**
 * Query params for gift-certificate-definitions endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryGiftCertificateDefinitionsQuery = any;
