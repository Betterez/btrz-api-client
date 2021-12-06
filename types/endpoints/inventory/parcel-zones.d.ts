export = parcelZonesFactory;
declare function parcelZonesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, parcelZone, jwtToken, headers }: {
        token: any;
        parcelZone: any;
        jwtToken: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, parcelZoneId, parcelZone, headers }: {
        jwtToken: any;
        token: any;
        parcelZoneId: any;
        parcelZone: any;
        headers: any;
    }) => any;
};
