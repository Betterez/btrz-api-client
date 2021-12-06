export = serviceTypesFactory;
declare function serviceTypesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ serviceTypeId, token, headers }: {
        serviceTypeId: any;
        token: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, serviceType, headers }: {
        jwtToken: any;
        token: any;
        serviceType: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, serviceTypeId, serviceType, headers }: {
        jwtToken: any;
        token: any;
        serviceTypeId: any;
        serviceType: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, serviceTypeId, token, headers }: {
        jwtToken: any;
        serviceTypeId: any;
        token: any;
        headers: any;
    }) => any;
};
