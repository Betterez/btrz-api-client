export = ticketsFactory;
declare function ticketsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, id, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        headers: any;
    }) => any;
    all: ({ token, jwtToken, query, headers, providerId }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
        providerId: any;
    }) => any;
    patch: ({ token, jwtToken, id, operations, warningsEnabled, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        operations: any;
        warningsEnabled: any;
        headers: any;
    }) => any;
    companionTickets: ({ token, jwtToken, ticketId, headers }: {
        token: any;
        jwtToken: any;
        ticketId: any;
        headers: any;
    }) => any;
};
