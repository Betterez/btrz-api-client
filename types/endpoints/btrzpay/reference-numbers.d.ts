export = referenceNumbersFactory;
declare function referenceNumbersFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, jwtToken, referenceNumberRequest, headers }: {
        token: any;
        jwtToken: any;
        referenceNumberRequest: any;
        headers: any;
    }) => any;
};
