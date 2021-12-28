export = pdfFactory;
declare function pdfFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, query, itemId, headers }: {
        token: any;
        query?: {};
        itemId: any;
        headers: any;
    }) => any;
};
