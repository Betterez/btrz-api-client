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
    vouchers: {
        create({ token, jwtToken, query, data, headers }: {
            token: any;
            jwtToken: any;
            query: any;
            data: any;
            headers: any;
        }): any;
    };
};
