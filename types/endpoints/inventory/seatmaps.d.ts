export = seatmapsFactory;
declare function seatmapsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ seatmapId, routeId, scheduleId, manifestDate, query, token, headers }: {
        seatmapId: any;
        routeId: any;
        scheduleId: any;
        manifestDate: any;
        query?: {};
        token: any;
        headers: any;
    }) => any;
};
