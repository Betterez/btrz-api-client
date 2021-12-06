export = applicationsFactory;
declare function applicationsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, id, jwtToken, headers }: {
        token: any;
        id: any;
        jwtToken: any;
        headers: any;
    }) => any;
    getByName: ({ token, appName, jwtToken, headers }: {
        token: any;
        appName: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
