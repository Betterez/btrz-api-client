export = filteredTripsFactory;
declare function filteredTripsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, jwtToken, tripSegmentsId, headers }: {
        token: any;
        jwtToken: any;
        tripSegmentsId: any;
        headers: any;
    }) => any;
};
