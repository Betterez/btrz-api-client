export = redeemableItemsFactory;
declare function redeemableItemsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, redeemableItemId, query, headers }: {
        token: any;
        redeemableItemId: any;
        query?: {};
        headers: any;
    }) => any;
    getValid: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
};
