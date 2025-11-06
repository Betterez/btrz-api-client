export = multiproductSalesSettingsFactory;
declare function multiproductSalesSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, headers }: {
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, data, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        headers: any;
    }) => any;
};
