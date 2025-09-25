export = stripeTerminalsFactory;
declare function stripeTerminalsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, headers, query }: {
        token: any;
        jwtToken: any;
        headers: any;
        query?: {};
    }) => any;
    simulate: ({ token, jwtToken, id, stripePayment, query, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        stripePayment: any;
        query?: {};
        headers: any;
    }) => any;
};
