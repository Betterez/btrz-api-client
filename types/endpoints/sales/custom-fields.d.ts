export = customFieldsFactory;
/**
 * @typedef {Object} CustomFieldsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for custom-fields API (btrz-api-sales).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function }}
 */
declare function customFieldsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
};
declare namespace customFieldsFactory {
    export { CustomFieldsQuery };
}
type CustomFieldsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
