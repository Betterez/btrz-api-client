export = manifestLegForTicketsFactory;
declare function manifestLegForTicketsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, ticketId, params, headers }: {
        token: any;
        jwtToken: any;
        ticketId: any;
        params: any;
        headers: any;
    }) => any;
};
