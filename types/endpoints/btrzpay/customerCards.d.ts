export = customerCardsFactory;
declare function customerCardsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    remove: ({ token, jwtToken, paymentMethodId, customerId, customerCardId, headers }: {
        token: any;
        jwtToken: any;
        paymentMethodId: any;
        customerId: any;
        customerCardId: any;
        headers: any;
    }) => any;
    create: ({ token, jwtToken, paymentMethodId, customerId, customerCard, headers }: {
        token: any;
        jwtToken: any;
        paymentMethodId: any;
        customerId: any;
        customerCard: any;
        headers: any;
    }) => any;
    get: ({ token, jwtToken, paymentMethodId, customerId, customerCardId, headers }: {
        token: any;
        jwtToken: any;
        paymentMethodId: any;
        customerId: any;
        customerCardId: any;
        headers: any;
    }) => any;
    all: ({ token, jwtToken, paymentMethodId, customerId, headers }: {
        token: any;
        jwtToken: any;
        paymentMethodId: any;
        customerId: any;
        headers: any;
    }) => any;
};
