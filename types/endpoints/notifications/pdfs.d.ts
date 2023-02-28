export = pdfFactory;
declare function pdfFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, query, itemId, headers, responseType }: {
        token: any;
        jwtToken: any;
        query?: {};
        itemId: any;
        headers: any;
        responseType: any;
    }) => any;
};
