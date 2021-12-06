export = insurancesCostFactory;
declare function insurancesCostFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, productId, declaredValue, query, headers }: {
        token: any;
        productId: any;
        declaredValue: any;
        query?: {};
        headers: any;
    }) => any;
};
