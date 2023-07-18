export = segmentInformationTableFactory;
declare function segmentInformationTableFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, routeId, query, headers }: {
        token: any;
        jwtToken: any;
        routeId: any;
        query?: {};
        headers: any;
    }) => any;
};
