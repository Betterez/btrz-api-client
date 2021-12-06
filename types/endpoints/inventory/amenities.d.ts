export = amenitiesFactory;
declare function amenitiesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, amenityId, query, headers }: {
        token: any;
        amenityId: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, amenity, headers }: {
        token: any;
        jwtToken: any;
        amenity: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, amenityId, amenity, headers }: {
        token: any;
        jwtToken: any;
        amenityId: any;
        amenity: any;
        headers: any;
    }) => any;
};
