export = paymentMethodsFactory;
declare function paymentMethodsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    getByProviderName: ({ token, jwtToken, providerName, headers }: {
        token: any;
        jwtToken: any;
        providerName: any;
        headers: any;
    }) => any;
    create: ({ token, jwtToken, paymentMethod, headers }: {
        token: any;
        jwtToken: any;
        paymentMethod: any;
        headers: any;
    }) => any;
    get: ({ token, jwtToken, paymentMethodId, headers }: {
        token: any;
        jwtToken: any;
        paymentMethodId: any;
        headers: any;
    }) => any;
    setToAgency: ({ token, jwtToken, agencyId, providerId, paymentMethodNames, headers }: {
        token: any;
        jwtToken: any;
        agencyId: any;
        providerId: any;
        paymentMethodNames: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, paymentMethodId, paymentMethod, headers }: {
        token: any;
        jwtToken: any;
        paymentMethodId: any;
        paymentMethod: any;
        headers: any;
    }) => any;
    createDefaultPaymentMethods: ({ token, jwtToken, accountId }: {
        token: any;
        jwtToken: any;
        accountId: any;
    }) => any;
};
