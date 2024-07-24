export = pdfDataFactory;
declare function pdfDataFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, query, itemId, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        itemId: any;
        headers: any;
    }) => any;
};
