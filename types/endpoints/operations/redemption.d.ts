export = redemptionFactory;
declare function redemptionFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, jwtToken, redemption, headers }: {
        token: any;
        jwtToken: any;
        redemption: any;
        headers: any;
    }) => any;
    getValidate: ({ token, jwtToken, passId, timezone, headers }: {
        token: any;
        jwtToken: any;
        passId: any;
        timezone: any;
        headers: any;
    }) => any;
    unredeem: ({ token, jwtToken, data, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        headers: any;
    }) => any;
};
