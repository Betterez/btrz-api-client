export = travellerCardProvidersFactory;
declare function travellerCardProvidersFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, travellerCardProvider, headers }: {
        token: any;
        jwtToken: any;
        travellerCardProvider: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, travellerCardProviderId, travellerCardProvider, headers }: {
        jwtToken: any;
        token: any;
        travellerCardProviderId: any;
        travellerCardProvider: any;
        headers: any;
    }) => any;
    get: ({ token, travellerCardProviderId, jwtToken, headers }: {
        token: any;
        travellerCardProviderId: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
