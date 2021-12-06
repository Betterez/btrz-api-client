export = paymentTerminalFactory;
declare function paymentTerminalFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ paymentTerminalId, token, headers }: {
        paymentTerminalId: any;
        token: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, paymentTerminal, headers }: {
        jwtToken: any;
        token: any;
        paymentTerminal: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, paymentTerminalId, paymentTerminal, headers }: {
        jwtToken: any;
        token: any;
        paymentTerminalId: any;
        paymentTerminal: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, paymentTerminalId, token, headers }: {
        jwtToken: any;
        paymentTerminalId: any;
        token: any;
        headers: any;
    }) => any;
};
