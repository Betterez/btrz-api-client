export = revenueManagementSettingsFactory;
declare function revenueManagementSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, headers }: {
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, revenueManagementSettings, headers }: {
        token: any;
        jwtToken: any;
        revenueManagementSettings: any;
        headers: any;
    }) => any;
};
