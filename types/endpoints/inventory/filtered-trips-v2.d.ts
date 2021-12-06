export = filteredTripsV2Factory;
declare function filteredTripsV2Factory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, jwtToken, filteredTrip, headers }: {
        token: any;
        jwtToken: any;
        filteredTrip: any;
        headers: any;
    }) => any;
};
