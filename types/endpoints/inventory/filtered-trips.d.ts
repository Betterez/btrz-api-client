export = filteredTripsFactory;
declare function filteredTripsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, tripSegmentsId, headers }: {
        token: any;
        jwtToken: any;
        tripSegmentsId: any;
        headers: any;
    }) => any;
};
