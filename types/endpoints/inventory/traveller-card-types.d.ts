export = travellerCardTypesFactory;
declare function travellerCardTypesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, travellerCardType, headers }: {
        token: any;
        jwtToken: any;
        travellerCardType: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, travellerCardTypeId, travellerCardType, headers }: {
        jwtToken: any;
        token: any;
        travellerCardTypeId: any;
        travellerCardType: any;
        headers: any;
    }) => any;
    get: ({ token, travellerCardTypeId, jwtToken, headers }: {
        token: any;
        travellerCardTypeId: any;
        jwtToken: any;
        headers: any;
    }) => any;
    remove: ({ token, travellerCardTypeId, jwtToken, headers }: {
        token: any;
        travellerCardTypeId: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
