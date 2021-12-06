export = reportTypesFactory;
declare function reportTypesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, id, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        headers: any;
    }) => any;
    getByName: ({ token, jwtToken, name, headers }: {
        token: any;
        jwtToken: any;
        name: any;
        headers: any;
    }) => any;
};
