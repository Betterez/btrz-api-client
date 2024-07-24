export = externalBookingsFactory;
declare function externalBookingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ jwtToken, token, externalBooking, headers, query }: {
        jwtToken: any;
        token: any;
        externalBooking: any;
        headers: any;
        query?: {};
    }) => any;
    remove: ({ jwtToken, token, ticketId, headers }: {
        jwtToken: any;
        token: any;
        ticketId: any;
        headers: any;
    }) => any;
};
