export = paymentsFactory;
declare function paymentsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, jwtToken, payments, headers }: {
        token: any;
        jwtToken: any;
        payments: any;
        headers: any;
    }) => any;
    get: ({ token, jwtToken, transactionId, headers }: {
        token: any;
        jwtToken: any;
        transactionId: any;
        headers: any;
    }) => any;
};
