export = giftCertificatesFactory;
declare function giftCertificatesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, GCNumber, query, headers }: {
        token: any;
        GCNumber: any;
        query?: {};
        headers: any;
    }) => any;
};
