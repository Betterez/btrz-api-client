export = mergedFareTablesFactory;
declare function mergedFareTablesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, routeId, productId, headers }: {
        token: any;
        routeId: any;
        productId: any;
        headers: any;
    }) => any;
};
