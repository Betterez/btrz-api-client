export = tripsFactory;
declare function tripsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, id, headers }: {
        token: any;
        id: any;
        headers: any;
    }) => any;
};
