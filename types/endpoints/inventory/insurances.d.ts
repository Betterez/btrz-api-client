export = insurancesFactory;
declare function insurancesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, insurance, jwtToken, headers }: {
        token: any;
        insurance: any;
        jwtToken: any;
        headers: any;
    }) => any;
    get: ({ token, insuranceId, headers }: {
        token: any;
        insuranceId: any;
        headers: any;
    }) => any;
    update: ({ token, insurance, jwtToken, insuranceId, headers }: {
        token: any;
        insurance: any;
        jwtToken: any;
        insuranceId: any;
        headers: any;
    }) => any;
    remove: ({ token, jwtToken, insuranceId, headers }: {
        token: any;
        jwtToken: any;
        insuranceId: any;
        headers: any;
    }) => any;
};
