export = usersFactory;
declare function usersFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, id, headers }?: {
        token: any;
        jwtToken: any;
        id: any;
        headers: any;
    }) => any;
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
};
