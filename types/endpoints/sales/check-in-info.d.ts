export = checkInInfoFactory;
declare function checkInInfoFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, id, headers, query }: {
        token: any;
        jwtToken: any;
        id: any;
        headers: any;
        query?: {};
    }) => any;
};
