export = mitTerminalFactory;
/**
 * @typedef {Object} MitTerminalSettingsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for mit-terminals-settings API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function mitTerminalFactory({ client, internalAuthTokenProvider }: {
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
declare namespace mitTerminalFactory {
    export { MitTerminalSettingsQuery };
}
type MitTerminalSettingsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
