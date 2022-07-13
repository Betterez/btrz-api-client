export = passengerCheckInInfoFactory;
declare function passengerCheckInInfoFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, id, headers }: {
        token: any;
        jwtToken: any;
        id: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, id, data, headers, query }: {
        token: any;
        jwtToken: any;
        id: any;
        data: any;
        headers: any;
        query: any;
    }) => any;
};
