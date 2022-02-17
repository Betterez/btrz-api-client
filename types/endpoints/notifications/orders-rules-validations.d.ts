export = ordersRulesValidations;
declare function ordersRulesValidations({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, jwtToken, query, orderRulesValidation, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        orderRulesValidation: any;
        headers: any;
    }) => any;
};
