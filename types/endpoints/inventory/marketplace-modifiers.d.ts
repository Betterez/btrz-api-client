export = marketplaceModifierFactory;
declare function marketplaceModifierFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ marketplaceModifierId, token, headers }: {
        marketplaceModifierId: any;
        token: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, marketplaceModifier, headers }: {
        jwtToken: any;
        token: any;
        marketplaceModifier: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, marketplaceModifierId, marketplaceModifier, headers }: {
        jwtToken: any;
        token: any;
        marketplaceModifierId: any;
        marketplaceModifier: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, marketplaceModifierId, token, headers }: {
        jwtToken: any;
        marketplaceModifierId: any;
        token: any;
        headers: any;
    }) => any;
};
