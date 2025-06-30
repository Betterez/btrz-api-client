export = promosFactory;
declare function promosFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ promoId, token, query, headers }: {
        promoId: any;
        token: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ jwtToken, promo, token, headers }: {
        jwtToken: any;
        promo: any;
        token: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, promoId, update, headers }: {
        jwtToken: any;
        token: any;
        promoId: any;
        update: any;
        headers: any;
    }) => any;
    patch: ({ jwtToken, token, promoId, operations, headers }: {
        jwtToken: any;
        token: any;
        promoId: any;
        operations: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, promoId, token, headers }: {
        jwtToken: any;
        promoId: any;
        token: any;
        headers: any;
    }) => any;
    addRule: ({ jwtToken, token, promoId, rule, headers }: {
        jwtToken: any;
        token: any;
        promoId: any;
        rule: any;
        headers: any;
    }) => any;
    updateRule: ({ jwtToken, token, promoId, ruleId, rule, headers }: {
        jwtToken: any;
        token: any;
        promoId: any;
        ruleId: any;
        rule: any;
        headers: any;
    }) => any;
};
