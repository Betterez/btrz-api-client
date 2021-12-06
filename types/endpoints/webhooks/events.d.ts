export = eventsFactory;
declare function eventsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, context, query, headers }: {
        token: any;
        jwtToken: any;
        context: any;
        query?: {};
        headers: any;
    }) => any;
};
