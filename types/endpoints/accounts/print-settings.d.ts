export = printSettingsFactory;
declare function printSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, printSettings, headers }: {
        jwtToken: any;
        token: any;
        printSettings: any;
        headers: any;
    }) => any;
};
