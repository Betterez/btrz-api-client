export = customersFactory;
declare function customersFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    put: ({ customerId, customer, token, jwtToken, headers }: {
        customerId: any;
        customer: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    all: ({ token, jwtToken, query, headers, providerId }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
        providerId: any;
    }) => any;
    create: ({ customer, token, jwtToken, query, headers }: {
        customer: any;
        token: any;
        jwtToken: any;
        query: any;
        headers: any;
    }) => any;
    signIn: ({ email, password, apiKey }: {
        email: any;
        password: any;
        apiKey: any;
    }) => any;
    signInCas: ({ service, ticket, token, headers }: {
        service: any;
        ticket: any;
        token: any;
        headers: any;
    }) => any;
    update: ({ customerId, token, jwtToken, data, query, headers }: {
        customerId: any;
        token: any;
        jwtToken: any;
        data: any;
        query: any;
        headers: any;
    }) => any;
    merge: ({ destinationCustomerId, sourceCustomerIds, jwtToken, token }: {
        destinationCustomerId: any;
        sourceCustomerIds: any;
        jwtToken: any;
        token: any;
    }) => any;
};
