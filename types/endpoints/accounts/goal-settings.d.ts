export = goalSettingsFactory;
declare function goalSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, goalSettings, headers }: {
        jwtToken: any;
        token: any;
        goalSettings: any;
        headers: any;
    }) => any;
};
