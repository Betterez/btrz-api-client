export = faresFactory;
declare function faresFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, id, headers }: {
        token: any;
        id: any;
        headers: any;
    }) => any;
};
