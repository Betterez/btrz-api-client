export = terminalPaymentsFactory;
/**
 * @typedef {Object} TerminalPaymentsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for terminal payments API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ mit: Object, webhooks: Object }}
 */
declare function terminalPaymentsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    mit: any;
    webhooks: any;
};
declare namespace terminalPaymentsFactory {
    export { TerminalPaymentsQuery };
}
type TerminalPaymentsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
