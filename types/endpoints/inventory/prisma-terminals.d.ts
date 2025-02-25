export = prismaTerminalFactory;
declare function prismaTerminalFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ prismaTerminalId, token, jwtToken, headers }: {
        prismaTerminalId: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, prismaTerminal, headers }: {
        jwtToken: any;
        token: any;
        prismaTerminal: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, prismaTerminalId, prismaTerminal, headers }: {
        jwtToken: any;
        token: any;
        prismaTerminalId: any;
        prismaTerminal: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, prismaTerminalId, token, headers }: {
        jwtToken: any;
        prismaTerminalId: any;
        token: any;
        headers: any;
    }) => any;
};
