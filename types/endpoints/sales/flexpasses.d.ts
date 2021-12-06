export = flexpassesEndpointsFactory;
declare function flexpassesEndpointsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, flexpassId, query, headers }: {
        token: any;
        jwtToken: any;
        flexpassId: any;
        query?: {};
        headers: any;
    }) => any;
};
