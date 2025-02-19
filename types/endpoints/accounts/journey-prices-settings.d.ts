export = journeyPricesSettingsFactory;
declare function journeyPricesSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, headers }: {
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, journeyPricesSettings, headers }: {
        token: any;
        jwtToken: any;
        journeyPricesSettings: any;
        headers: any;
    }) => any;
};
