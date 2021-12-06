export = referencedPaymentsFactory;
declare function referencedPaymentsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    getStatus: ({ token, jwtToken, transactionId, referenceNumber, headers }: {
        token: any;
        jwtToken: any;
        transactionId: any;
        referenceNumber: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, externalType, referenceNumber, paymentResult, headers }: {
        token: any;
        jwtToken: any;
        externalType: any;
        referenceNumber: any;
        paymentResult: any;
        headers: any;
    }) => any;
};
