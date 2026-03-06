export = lexiconsFactory;
/**
 * Factory for lexicons API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, create: function, createOrUpdateMany: function, updateMany: function, getByText: function, suggestions: { list: function, getById: function, update: function, delete: function, create: function } }}
 */
declare function lexiconsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    create: Function;
    createOrUpdateMany: Function;
    updateMany: Function;
    getByText: Function;
    suggestions: {
        list: Function;
        getById: Function;
        update: Function;
        delete: Function;
        create: Function;
    };
};
