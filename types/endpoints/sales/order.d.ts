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
    overwrite: ({ token, orderId, payments, jwtToken, headers, query }: {
        token: any;
        orderId: any;
        payments: any;
        jwtToken: any;
        headers: any;
        query?: {};
    }) => any;
};
