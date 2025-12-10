export = notifyTicketFactory;
declare function notifyTicketFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    childUsers: {
        create({ token, jwtToken, email, lang, headers }: {
            token: any;
            jwtToken: any;
            email: any;
            lang: any;
            headers: any;
        }): any;
    };
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
    manifest: {
        create({ token, jwtToken, data, headers }: {
            token: any;
            jwtToken: any;
            data: any;
            headers: any;
        }): any;
    };
};
