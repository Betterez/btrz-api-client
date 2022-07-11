export = faresFactory;
declare function faresFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, id, headers }: {
        token: any;
        id: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, fareId, fare, headers }: {
        token: any;
        jwtToken: any;
        fareId: any;
        fare: any;
        headers: any;
    }) => any;
    create: ({ token, jwtToken, fare, headers }: {
        token: any;
        jwtToken: any;
        fare: any;
        headers: any;
    }) => any;
    adjustments: {
        create({ token, jwtToken, fareId, adjustmentsOverride, headers }: {
            token: any;
            jwtToken: any;
            fareId: any;
            adjustmentsOverride: any;
            headers: any;
        }): any;
        remove({ printTemplateId, token, jwtToken, fareId, adjustmentId, headers }: {
            printTemplateId: any;
            token: any;
            jwtToken: any;
            fareId: any;
            adjustmentId: any;
            headers: any;
        }): any;
    };
};
