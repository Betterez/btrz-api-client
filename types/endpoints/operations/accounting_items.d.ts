export = accountingItemsFactory;
declare function accountingItemsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ accountingItemId, token, headers }: {
        accountingItemId: any;
        token: any;
        headers: any;
    }) => any;
};
