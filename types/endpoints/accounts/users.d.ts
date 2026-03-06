export = usersFactory;
/**
 * Factory for users API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, getV2: function, all: function, create: function, login: function, update: function, createOrUpdateMany: function, impersonate: function, startMfa: function, confirmMfa: function, disableMfa: function, sequences: { get: function, all: function, create: function, update: function, transfer: function } }}
 */
declare function usersFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
    getV2: Function;
    all: Function;
    create: Function;
    login: Function;
    update: Function;
    createOrUpdateMany: Function;
    impersonate: Function;
    startMfa: Function;
    confirmMfa: Function;
    disableMfa: Function;
    sequences: {
        get: Function;
        all: Function;
        create: Function;
        update: Function;
        transfer: Function;
    };
};
