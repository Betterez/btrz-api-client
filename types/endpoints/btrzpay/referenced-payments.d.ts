export = referencedPaymentsFactory;
/**
 * Factory for referenced payments API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ getStatus: function, update: function }}
 */
declare function referencedPaymentsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    getStatus: Function;
    update: Function;
};
