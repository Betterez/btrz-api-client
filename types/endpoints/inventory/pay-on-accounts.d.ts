export = payOnAccountsFactory;
declare function payOnAccountsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, responseType, headers }: {
        token: any;
        query?: {};
        responseType?: string;
        headers: any;
    }) => any;
};
