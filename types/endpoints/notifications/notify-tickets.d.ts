export = notifyTicketFactory;
declare function notifyTicketFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    tickets: {
        create({ token, jwtToken, query, operation, to, ticketId, headers }: {
            token: any;
            jwtToken: any;
            query: any;
            operation: any;
            to: any;
            ticketId: any;
            headers: any;
        }): any;
    };
};
