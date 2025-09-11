export = salesforceSettingsFactory;
declare function salesforceSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ jwtToken, token, query, headers }: {
        jwtToken: any;
        token: any;
        query: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, salesforceSettings, headers }: {
        jwtToken: any;
        token: any;
        salesforceSettings: any;
        headers: any;
    }) => any;
};
