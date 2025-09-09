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
};
