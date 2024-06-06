export = mitTerminalFactory;
declare function mitTerminalFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ id, token, jwtToken, headers }: {
        id: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, mitTerminalSettings, headers }: {
        jwtToken: any;
        token: any;
        mitTerminalSettings: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, id, mitTerminalSettings, headers }: {
        jwtToken: any;
        token: any;
        id: any;
        mitTerminalSettings: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, id, token, headers }: {
        jwtToken: any;
        id: any;
        token: any;
        headers: any;
    }) => any;
};
