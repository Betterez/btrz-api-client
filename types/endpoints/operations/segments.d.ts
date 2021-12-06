export = segmentsFactory;
declare function segmentsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, productId, ticketId, providerId, headers }: {
        token: any;
        jwtToken: any;
        productId: any;
        ticketId: any;
        providerId: any;
        headers: any;
    }) => any;
};
