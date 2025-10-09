export = getnetTerminalFactory;
declare function getnetTerminalFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ getnetTerminalId, token, jwtToken, headers }: {
        getnetTerminalId: any;
        token: any;
        jwtToken: any;
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
    update: ({ jwtToken, token, getnetTerminalId, getnetTerminal, headers }: {
        jwtToken: any;
        token: any;
        getnetTerminalId: any;
        getnetTerminal: any;
        headers: any;
    }) => any;
};
