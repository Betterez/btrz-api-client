export = zonePriceOverageFactory;
declare function zonePriceOverageFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ zonePriceOverageId, token, headers }: {
        zonePriceOverageId: any;
        token: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, zonePriceOverages, headers }: {
        jwtToken: any;
        token: any;
        zonePriceOverages: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, zonePriceOverageId, zonePriceOverages, headers }: {
        jwtToken: any;
        token: any;
        zonePriceOverageId: any;
        zonePriceOverages: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, zonePriceOverageId, token, headers }: {
        jwtToken: any;
        zonePriceOverageId: any;
        token: any;
        headers: any;
    }) => any;
};
