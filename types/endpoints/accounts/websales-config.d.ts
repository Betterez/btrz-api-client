export = websalesConfigFactory;
declare function websalesConfigFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    update: ({ token, jwtToken, websalesConfigId, websalesConfig, headers }: {
        token: any;
        jwtToken: any;
        websalesConfigId: any;
        websalesConfig: any;
        headers: any;
    }) => any;
};
