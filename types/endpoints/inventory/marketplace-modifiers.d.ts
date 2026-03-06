export = marketplaceModifierFactory;
/**
 * Query params for marketplace-modifiers endpoints (btrz-api-inventory). Forwarded to API as-is.
 * @typedef {Object} InventoryMarketplaceModifiersQuery
 */
/**
 * Factory for marketplace-modifiers API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function marketplaceModifierFactory({ client, internalAuthTokenProvider }: {
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
declare namespace marketplaceModifierFactory {
    export { InventoryMarketplaceModifiersQuery };
}
/**
 * Query params for marketplace-modifiers endpoints (btrz-api-inventory). Forwarded to API as-is.
 */
type InventoryMarketplaceModifiersQuery = any;
