export = customersFactory;
declare function customersFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    sendResetPasswordEmail: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    sendActivationEmail: ({ token, query, data, headers }: {
        token: any;
        query?: {};
        data: any;
        headers: any;
    }) => any;
};
