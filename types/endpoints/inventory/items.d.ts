export = itemsFactory;
declare function itemsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, jwtToken, headers }: {
        token: any;
        query?: {};
        jwtToken: any;
        headers: any;
    }) => any;
    get: ({ itemId, token, jwtToken, query, headers }: {
        itemId: any;
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ jwtToken, item, token, headers }: {
        jwtToken: any;
        item: any;
        token: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, itemId, item, headers }: {
        jwtToken: any;
        token: any;
        itemId: any;
        item: any;
        headers: any;
    }) => any;
    tickets: {
        update({ jwtToken, token, soldItemId, ticketId, headers }: {
            jwtToken: any;
            token: any;
            soldItemId: any;
            ticketId: any;
            headers: any;
        }): any;
    };
};
