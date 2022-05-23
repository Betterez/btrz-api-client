export = transactionsFactory;
declare function transactionsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query: any;
        headers: any;
    }) => any;
    get: ({ token, jwtToken, trxId, query, headers }: {
        token: any;
        jwtToken: any;
        trxId: any;
        query: any;
        headers: any;
    }) => any;
    getTickets: ({ token, jwtToken, trxId, headers }: {
        token: any;
        jwtToken: any;
        trxId: any;
        headers: any;
    }) => any;
    appliedInsurance: ({ token, jwtToken, trxId, headers }: {
        token: any;
        jwtToken: any;
        trxId: any;
        headers: any;
    }) => any;
    companionTickets: ({ token, jwtToken, transactionId, ticketIds, headers }: {
        token: any;
        jwtToken: any;
        transactionId: any;
        ticketIds: any;
        headers: any;
    }) => any;
    expireAll: ({ internalAuthTokenProvider, jwtToken, transactionId, avoidEmail, token, headers }: {
        internalAuthTokenProvider: any;
        jwtToken: any;
        transactionId: any;
        avoidEmail: any;
        token: any;
        headers: any;
    }) => any;
    cancellableItems: ({ token, jwtToken, transactionId, headers, displayAll }: {
        token: any;
        jwtToken: any;
        transactionId: any;
        headers: any;
        displayAll: any;
    }) => any;
    payments: {
        update({ token, jwtToken, trxId, paymentResult, headers }: {
            token: any;
            jwtToken: any;
            trxId: any;
            paymentResult: any;
            headers: any;
        }): any;
    };
};
