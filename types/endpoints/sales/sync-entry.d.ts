export = syncEntryFactory;
declare function syncEntryFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    patch: ({ token, data, jwtToken, headers }: {
        token: any;
        data: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
