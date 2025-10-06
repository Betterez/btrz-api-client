export = getnetTerminalFactory;
declare function getnetTerminalFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ getnetTerminalId, token, headers }: {
        getnetTerminalId: any;
        token: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, getnetTerminal, headers }: {
        jwtToken: any;
        token: any;
        getnetTerminal: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, getnetTerminalId, token, headers }: {
        jwtToken: any;
        getnetTerminalId: any;
        token: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, getnetTerminal, headers }: {
        jwtToken: any;
        token: any;
        getnetTerminal: any;
        headers: any;
    }) => any;
};
