export = amenityGroupsFactory;
declare function amenityGroupsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, amenityGroupId, query, headers }: {
        token: any;
        amenityGroupId: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, amenityGroup, headers }: {
        token: any;
        jwtToken: any;
        amenityGroup: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, amenityGroupId, amenityGroup, headers }: {
        token: any;
        jwtToken: any;
        amenityGroupId: any;
        amenityGroup: any;
        headers: any;
    }) => any;
};
