export = applicationSettingsFactory;
declare function applicationSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, providerId, jwtToken, query, headers }: {
        token: any;
        providerId: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    update: ({ jwtToken, token, id, application, headers }: {
        jwtToken: any;
        token: any;
        id: any;
        application: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, token, id, headers }: {
        jwtToken: any;
        token: any;
        id: any;
        headers: any;
    }) => any;
    regenerateKeys: ({ jwtToken, token, id, headers }: {
        jwtToken: any;
        token: any;
        id: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, application, headers }: {
        jwtToken: any;
        token: any;
        application: any;
        headers: any;
    }) => any;
};
