export = zonePriceFactory;
declare function zonePriceFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ zonePriceId, token, headers }: {
        zonePriceId: any;
        token: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, zonePrice, headers }: {
        jwtToken: any;
        token: any;
        zonePrice: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, zonePriceId, zonePrice, headers }: {
        jwtToken: any;
        token: any;
        zonePriceId: any;
        zonePrice: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, zonePriceId, token, headers }: {
        jwtToken: any;
        zonePriceId: any;
        token: any;
        headers: any;
    }) => any;
};
