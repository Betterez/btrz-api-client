export = seatfeesFactory;
declare function seatfeesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ seatfeeId, token, headers }: {
        seatfeeId: any;
        token: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, seatfee, headers }: {
        jwtToken: any;
        token: any;
        seatfee: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, seatfeeId, seatfee, headers }: {
        jwtToken: any;
        token: any;
        seatfeeId: any;
        seatfee: any;
        headers: any;
    }) => any;
};
