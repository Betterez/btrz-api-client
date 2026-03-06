export = routesFactory;
/**
 * Factory for routes API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, prices: function, all: function, stations: function, create: function, update: function, remove: function, fareTables: object, stops: object, fareRules: object, priceBuckets: object, crossBorderDistances: object, prorationTables: object }}
 */
declare function routesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
    prices: Function;
    all: Function;
    stations: Function;
    create: Function;
    update: Function;
    remove: Function;
    fareTables: object;
    stops: object;
    fareRules: object;
    priceBuckets: object;
    crossBorderDistances: object;
    prorationTables: object;
};
