export = trustedMachinesFactory;
declare function trustedMachinesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, jwtToken, data, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        headers: any;
    }) => any;
    get: ({ token, jwtToken, id, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        headers: any;
    }) => any;
};
