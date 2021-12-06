export = orderFactory;
declare function orderFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, order, jwtToken, headers }: {
        token: any;
        order: any;
        jwtToken: any;
        headers: any;
    }) => any;
    get: ({ token, orderId, query, headers }: {
        token: any;
        orderId: any;
        query?: {};
        headers: any;
    }) => any;
};
