export = stationsZonesFactory;
declare function stationsZonesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
};
