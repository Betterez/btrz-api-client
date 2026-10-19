export = taxStatusesFactory;
/**
 * Query params for GET /tax-statuses (btrz-api-inventory). Forwarded to the API as-is.
 * @typedef {Object.<string, *>} TaxStatusesListQuery
 */
/**
 * Body for POST /tax-statuses and PUT /tax-statuses/:taxStatusId (btrz-api-inventory).
 * @typedef {Object} TaxStatusData
 * @property {string} name - Tax status name
 * @property {number} percentage - Percentage already multiplied by 1000. 21000 means 21 percent. The client forwards the value and does not scale it.
 */
/**
 * Factory for tax-statuses API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function taxStatusesFactory({ client, internalAuthTokenProvider }: {
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
declare namespace taxStatusesFactory {
    export { TaxStatusData, TaxStatusesListQuery };
}
/**
 * Query params for GET /tax-statuses (btrz-api-inventory). Forwarded to the API as-is.
 */
type TaxStatusesListQuery = {
    [key: string]: any;
};
/**
 * Body for POST /tax-statuses and PUT /tax-statuses/:taxStatusId (btrz-api-inventory).
 */
type TaxStatusData = {
    /**
     * - Tax status name
     */
    name: string;
    /**
     * - Percentage already multiplied by 1000. 21000 means 21 percent. The client forwards the value and does not scale it.
     */
    percentage: number;
};
