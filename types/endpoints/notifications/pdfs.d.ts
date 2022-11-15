export = pdfFactory;
declare function pdfFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, query, itemId, headers, responseType }: {
        token: any;
        query?: {};
        itemId: any;
        headers: any;
        responseType: any;
    }) => any;
};
