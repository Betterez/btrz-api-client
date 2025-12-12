export = mergedFareTablesFactory;
declare function mergedFareTablesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, routeId, productId, headers }: {
        token: any;
        routeId: string;
        productId: string;
        headers?: any;
    }) => any;
};
