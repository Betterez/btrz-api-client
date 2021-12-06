export = appliedInsuranceFactory;
declare function appliedInsuranceFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, trxId, headers }: {
        token: any;
        jwtToken: any;
        trxId: any;
        headers: any;
    }) => any;
};
