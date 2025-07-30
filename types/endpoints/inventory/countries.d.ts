export = countriesFactory;
declare function countriesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, id, query, headers }: {
        token: any;
        id: any;
        query?: {};
        headers: any;
    }) => any;
};
