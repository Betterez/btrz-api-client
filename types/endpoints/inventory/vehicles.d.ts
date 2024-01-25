export = vehiclesFactory;
declare function vehiclesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ vehicleId, token, headers }: {
        vehicleId: any;
        token: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, vehicle, headers }: {
        jwtToken: any;
        token: any;
        vehicle: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, vehicleId, vehicle, headers }: {
        jwtToken: any;
        token: any;
        vehicleId: any;
        vehicle: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, vehicleId, token, headers }: {
        jwtToken: any;
        vehicleId: any;
        token: any;
        headers: any;
    }) => any;
    seatmaps: {
        create({ jwtToken, token, vehicleId, seatmap, headers, newdesign }: {
            jwtToken: any;
            token: any;
            vehicleId: any;
            seatmap: any;
            headers: any;
            newdesign: any;
        }): any;
        remove({ jwtToken, vehicleId, seatMapId, token, headers, newdesign }: {
            jwtToken: any;
            vehicleId: any;
            seatMapId: any;
            token: any;
            headers: any;
            newdesign: any;
        }): any;
    };
};
