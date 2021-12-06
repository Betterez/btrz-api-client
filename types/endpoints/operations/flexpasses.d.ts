export = flexpassesFactory;
declare function flexpassesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    deleteScanBytripId: ({ jwtToken, token, flexpassId, tripId, headers }: {
        jwtToken: any;
        token: any;
        flexpassId: any;
        tripId: any;
        headers: any;
    }) => any;
};
