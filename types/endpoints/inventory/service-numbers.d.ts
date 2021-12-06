export = serviceNumbersFactory;
declare function serviceNumbersFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, serviceNumber, headers }: {
        token: any;
        jwtToken: any;
        serviceNumber: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, serviceNumberId, serviceNumber, headers }: {
        jwtToken: any;
        token: any;
        serviceNumberId: any;
        serviceNumber: any;
        headers: any;
    }) => any;
    get: ({ token, serviceNumberId, jwtToken, headers }: {
        token: any;
        serviceNumberId: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
