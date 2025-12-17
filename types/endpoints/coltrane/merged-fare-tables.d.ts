export = mergedFareTablesFactory;
declare function mergedFareTablesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, routeId, productId, headers }: {
        token: any;
        jwtToken: any;
        routeId: any;
        productId: any;
        headers: any;
    }) => any;
};
