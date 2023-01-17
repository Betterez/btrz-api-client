export = shiftSettingsFactory;
declare function shiftSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, query, headers }: {
        token: any;
        query: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, shiftSettings, headers }: {
        jwtToken: any;
        token: any;
        shiftSettings: any;
        headers: any;
    }) => any;
};
