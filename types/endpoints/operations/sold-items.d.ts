export = soldItems;
declare function soldItems({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, headers, query }: {
        token: any;
        jwtToken: any;
        headers: any;
        query: any;
    }) => any;
    get: ({ token, jwtToken, soldItemId, headers }: {
        token: any;
        jwtToken: any;
        soldItemId: any;
        headers: any;
    }) => any;
};
