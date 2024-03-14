export = mitTerminalFactory;
declare function mitTerminalFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ mitTerminalId, token, headers }: {
        mitTerminalId: any;
        token: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, mitTerminal, headers }: {
        jwtToken: any;
        token: any;
        mitTerminal: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, mitTerminalId, mitTerminal, headers }: {
        jwtToken: any;
        token: any;
        mitTerminalId: any;
        mitTerminal: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, mitTerminalId, token, headers }: {
        jwtToken: any;
        mitTerminalId: any;
        token: any;
        headers: any;
    }) => any;
};
