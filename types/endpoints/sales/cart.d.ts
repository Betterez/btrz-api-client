export = cartFactory;
declare function cartFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, id, providerId, headers }: {
        token: any;
        id: any;
        providerId: any;
        headers: any;
    }) => any;
    create: ({ token, cart, jwtToken, headers }: {
        token: any;
        cart: any;
        jwtToken: any;
        headers: any;
    }) => any;
    add: ({ token, cartId, cart, jwtToken, headers }: {
        token: any;
        cartId: any;
        cart: any;
        jwtToken: any;
        headers: any;
    }) => any;
    deleteItems: ({ token, cartId, params, jwtToken, headers }: {
        token: any;
        cartId: any;
        params: any;
        jwtToken: any;
        headers: any;
    }) => any;
    loyaltyPointsAmount: {
        get({ token, jwtToken, cartId, query, headers }: {
            token: any;
            jwtToken: any;
            cartId: any;
            query?: {};
            headers: any;
        }): any;
    };
    patch: ({ token, jwtToken, cartId, data, headers }: {
        token: any;
        jwtToken: any;
        cartId: any;
        data: any;
        headers: any;
    }) => any;
    partialDepositStatus: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
    };
    payments: {
        delete({ token, cartId, jwtToken, headers }: {
            token: any;
            cartId: any;
            jwtToken: any;
            headers: any;
        }): any;
        put({ token, cartId, jwtToken, headers, payment }: {
            token: any;
            cartId: any;
            jwtToken: any;
            headers: any;
            payment: any;
        }): any;
    };
    taxExemptPaymentMethod: {
        post({ token, cartId, jwtToken, headers, data }: {
            token: any;
            cartId: any;
            jwtToken: any;
            headers: any;
            data?: {};
        }): any;
    };
    financingCosts: {
        create({ token, jwtToken, headers, cartId, financingCost, query }: {
            token: any;
            jwtToken: any;
            headers: any;
            cartId: any;
            financingCost: any;
            query?: {};
        }): any;
        delete({ token, jwtToken, headers, cartId }: {
            token: any;
            jwtToken: any;
            headers: any;
            cartId: any;
        }): any;
    };
};
