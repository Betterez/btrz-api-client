export type CreateModuleOptions = {
    /**
     * - Base URL for the HTTP client
     */
    baseURL?: string;
    /**
     * - Optional headers (e.g. x-amzn-trace-id)
     */
    headers?: any;
    /**
     * - Request timeout in ms
     */
    timeout?: number;
    /**
     * - Optional function to override baseURL per request
     */
    overrideFn?: (arg0: string) => string;
    /**
     * - Provider for service-to-service auth token
     */
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
    /**
     * - Optional HTTP/HTTPS agents
     */
    agents?: {
        httpAgent?: any;
        httpsAgent?: any;
    };
};
/**
 * Creates a new axios client
 * @param {Object} opts - Axios configuration
 * @param {string} opts.baseURL - the base url use for all endpoints by default
 * @param {Object} opts.headers - an object of http headers
 * @param {string} opts.timeout - timeout in milliseconds
 * @param {Function} opts.overrideFn - allows to override the baseUrl
 * @param {{httpAgent: import("http").Agent, httpsAgent: import("https").Agent}} opts.agents - An object containg one or both http agents
 * @returns {axios.AxiosInstance} Returns a configured axios instance
*/
export function clientFactory(opts: {
    baseURL: string;
    headers: any;
    timeout: string;
    overrideFn: Function;
    agents: {
        httpAgent: any;
        httpsAgent: any;
    };
}): axios.AxiosInstance;
/**
 * Returns the apiClient object with defaults set
 *
 * @param {Object}   options
 * @param {string}   options.baseURL - the base url use for all endpoints by default
 * @param {string}   options.timeout
 * @param {Object}   options.baseURLOverride - options object allowing to override baseUrl for some endpoints
 * @param {Function} options.baseURLOverride.someEndpoint
 * @param {Object}   options.internalAuthTokenProvider - an object containing a getToken() function that, when called,
 *                                              returns an authorization token that's valid for making service-to-service API calls.
 * @param {Function} options.internalAuthTokenProvider.getToken
 * @param {{httpAgent: import("http").Agent, httpsAgent: import("https").Agent}} options.agents - An object containg one or both http agents
 */
export function createApiClient(options: {
    baseURL: string;
    timeout: string;
    baseURLOverride: {
        someEndpoint: Function;
    };
    internalAuthTokenProvider: {
        getToken: Function;
    };
    agents: {
        httpAgent: any;
        httpsAgent: any;
    };
}): {
    constants: {
        INTERNAL_AUTH_TOKEN_SYMBOL: string;
    };
    _cleanClient: axios.AxiosInstance;
    inventory: any;
    coltrane: any;
    accounts: any;
    sales: any;
    operations: any;
    reports: any;
    notifications: any;
    uploads: any;
    loyalty: any;
    webhooks: any;
    seatmaps: any;
    btrzpay: any;
    invoices: any;
    gps: any;
    ratality: any;
};
import axios = require("axios");
