export = marketPricingSettingsFactory;
declare function marketPricingSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, headers }: {
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, marketPricingSettings, headers }: {
        token: any;
        jwtToken: any;
        marketPricingSettings: any;
        headers: any;
    }) => any;
};
