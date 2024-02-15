export = vehicleAssignmentFactory;
declare function vehicleAssignmentFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }): any;
    get({ token, jwtToken, vehicleAssignmentId, headers }: {
        token: any;
        jwtToken: any;
        vehicleAssignmentId: any;
        headers: any;
    }): any;
    create({ data, token, jwtToken, headers }: {
        data: any;
        token: any;
        jwtToken: any;
        headers: any;
    }): any;
    update({ vehicleAssignmentId, data, token, jwtToken, headers }: {
        vehicleAssignmentId: any;
        data: any;
        token: any;
        jwtToken: any;
        headers: any;
    }): any;
};
