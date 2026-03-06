export = peopleLookupsFactory;
/**
 * Factory for people-lookups API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, getById: function, update: function, create: function, remove: function }}
 */
declare function peopleLookupsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    getById: Function;
    update: Function;
    create: Function;
    remove: Function;
};
