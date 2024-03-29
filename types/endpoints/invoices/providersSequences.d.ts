export = providersSequencesFactory;
declare function providersSequencesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, invoiceProviderId, query, headers }: {
        token: any;
        jwtToken: any;
        invoiceProviderId: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, jwtToken, invoiceProviderId, invoiceProviderSequenceId, query, headers }: {
        token: any;
        jwtToken: any;
        invoiceProviderId: any;
        invoiceProviderSequenceId: any;
        query?: {};
        headers: any;
    }) => any;
    remove: ({ token, jwtToken, invoiceProviderId, id, query, headers }: {
        token: any;
        jwtToken: any;
        invoiceProviderId: any;
        id: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, invoiceProviderId, data, query, headers }: {
        token: any;
        jwtToken: any;
        invoiceProviderId: any;
        data: any;
        query?: {};
        headers: any;
    }) => any;
    update: ({ token, jwtToken, invoiceProviderId, invoiceProviderSequenceId, data, query, headers }: {
        token: any;
        jwtToken: any;
        invoiceProviderId: any;
        invoiceProviderSequenceId: any;
        data: any;
        query?: {};
        headers: any;
    }) => any;
};
