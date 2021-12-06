export = emailSettingsFactory;
declare function emailSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    getByEmail: ({ token, jwtToken, email, query, headers }: {
        token: any;
        jwtToken: any;
        email: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ data, token, jwtToken, headers }: {
        data: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, email, data, headers }: {
        token: any;
        jwtToken: any;
        email: any;
        data: any;
        headers: any;
    }) => any;
    remove: ({ email, token, jwtToken, headers }: {
        email: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
