export = payOnAccountsFactory;
declare function payOnAccountsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, responseType, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        responseType?: string;
        headers: any;
    }) => any;
};
