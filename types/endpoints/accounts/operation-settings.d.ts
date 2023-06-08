export = operationSettingsFactory;
declare function operationSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, operationSettings, headers }: {
        jwtToken: any;
        token: any;
        operationSettings: any;
        headers: any;
    }) => any;
};
