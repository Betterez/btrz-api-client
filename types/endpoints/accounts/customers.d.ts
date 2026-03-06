export = customersFactory;
/**
 * Factory for customers API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ put: function, all: function, create: function, signIn: function, signInCas: function, update: function, merge: function }}
 */
declare function customersFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    put: Function;
    all: Function;
    create: Function;
    signIn: Function;
    signInCas: Function;
    update: Function;
    merge: Function;
};
