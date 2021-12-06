export = customersFactory;
declare function customersFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    remove: ({ token, jwtToken, paymentMethodId, customerId, headers }: {
        token: any;
        jwtToken: any;
        paymentMethodId: any;
        customerId: any;
        headers: any;
    }) => any;
    create: ({ token, jwtToken, paymentMethodId, customer, headers }: {
        token: any;
        jwtToken: any;
        paymentMethodId: any;
        customer: any;
        headers: any;
    }) => any;
    get: ({ token, jwtToken, paymentMethodId, customerId, headers }: {
        token: any;
        jwtToken: any;
        paymentMethodId: any;
        customerId: any;
        headers: any;
    }) => any;
};
