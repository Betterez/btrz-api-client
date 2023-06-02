export = parcelQuotesFactory;
declare function parcelQuotesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, parcelQuoteData, jwtToken, headers }: {
        token: any;
        parcelQuoteData: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
