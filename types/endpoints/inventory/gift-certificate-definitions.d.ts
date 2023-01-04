export = giftCertificateDefinitionsFactory;
declare function giftCertificateDefinitionsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, jwtToken, giftcertificateId, query, headers }: {
        token: any;
        jwtToken: any;
        giftcertificateId: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, giftcertificate, query, headers }: {
        token: any;
        jwtToken: any;
        giftcertificate: any;
        query?: {};
        headers: any;
    }) => any;
    update: ({ token, jwtToken, giftcertificateId, giftcertificate, query, headers }: {
        token: any;
        jwtToken: any;
        giftcertificateId: any;
        giftcertificate: any;
        query?: {};
        headers: any;
    }) => any;
    remove: ({ token, jwtToken, giftcertificateId, query, headers }: {
        token: any;
        jwtToken: any;
        giftcertificateId: any;
        query?: {};
        headers: any;
    }) => any;
};
