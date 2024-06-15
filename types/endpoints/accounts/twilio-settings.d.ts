export = twilioSettingsFactory;
declare function twilioSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ jwtToken, token, query, headers }: {
        jwtToken: any;
        token: any;
        query: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, twilioSettings, headers }: {
        jwtToken: any;
        token: any;
        twilioSettings: any;
        headers: any;
    }) => any;
};
