export = accountsFactory;
declare function accountsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ jwtToken, accountId, headers }: {
        jwtToken: any;
        accountId: any;
        headers: any;
    }) => any;
    defaultUsers: {
        create({ token, jwtToken, accountId, data, headers }: {
            token: any;
            jwtToken: any;
            accountId: any;
            data: any;
            headers: any;
        }): any;
    };
};
