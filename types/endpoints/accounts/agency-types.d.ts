export = agencyTypesFactory;
/**
 * Query params for GET /agency-types (btrz-api-accounts).
 * @typedef {Object} AgencyTypesListQuery
 * @property {number} [page] - The page number to retrieve (positive integer)
 */
/**
 * Factory for agency-types API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function agencyTypesFactory({ client, internalAuthTokenProvider }: {
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
declare namespace agencyTypesFactory {
    export { AgencyTypesListQuery };
}
/**
 * Query params for GET /agency-types (btrz-api-accounts).
 */
type AgencyTypesListQuery = {
    page?: number;
};
