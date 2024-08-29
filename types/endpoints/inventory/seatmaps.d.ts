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
    getById: ({ seatmapId, token, jwtToken, query, headers }: {
        seatmapId: any;
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, seatmap, headers }: {
        token: any;
        jwtToken: any;
        seatmap: any;
        headers: any;
    }) => any;
    remove: ({ token, jwtToken, seatmapId, headers }: {
        token: any;
        jwtToken: any;
        seatmapId: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, seatmapId, seatmap, headers }: {
        token: any;
        jwtToken: any;
        seatmapId: any;
        seatmap: any;
        headers: any;
    }) => any;
    getOccupiedSeats: ({ token, jwtToken, seatmapId, query, headers }: {
        token: any;
        jwtToken: any;
        seatmapId: any;
        query?: {};
        headers: any;
    }) => any;
};
