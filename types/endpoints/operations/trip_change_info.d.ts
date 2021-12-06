export = tripChangeInfoFactory;
declare function tripChangeInfoFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, productId, params, headers }: {
        token: any;
        jwtToken: any;
        productId: any;
        params: any;
        headers: any;
    }) => any;
};
