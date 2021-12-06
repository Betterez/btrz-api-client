export = cartPromoFactory;
declare function cartPromoFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, jwtToken, cartId, query, headers }: {
        token: any;
        jwtToken: any;
        cartId: any;
        query?: {};
        headers: any;
    }) => any;
    remove: ({ token, jwtToken, cartId, query, headers }: {
        token: any;
        jwtToken: any;
        cartId: any;
        query?: {};
        headers: any;
    }) => any;
};
