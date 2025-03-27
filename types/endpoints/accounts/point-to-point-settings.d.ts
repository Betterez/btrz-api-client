export = pointToPointSettingsFactory;
declare function pointToPointSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, headers }: {
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, pointToPointSettings, headers }: {
        token: any;
        jwtToken: any;
        pointToPointSettings: any;
        headers: any;
    }) => any;
};
