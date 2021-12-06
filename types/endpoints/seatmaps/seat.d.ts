export = seatFactory;
declare function seatFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    update: ({ token, jwtToken, params, headers }: {
        token: any;
        jwtToken: any;
        params: any;
        headers: any;
    }) => any;
};
