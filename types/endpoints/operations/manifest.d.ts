export = manifestFactory;
declare function manifestFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    getAll: ({ token, jwtToken, providerId, data, headers }: {
        token: any;
        jwtToken: any;
        providerId: any;
        data: any;
        headers: any;
    }) => any;
    getById: ({ token, jwtToken, manifestId, query, headers }: {
        token: any;
        jwtToken: any;
        manifestId: any;
        query?: {};
        headers: any;
    }) => any;
    outlook: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    patch: ({ token, jwtToken, query, operations, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        operations: any;
        headers: any;
    }) => any;
    save: ({ token, jwtToken, providerId, data, headers }: {
        token: any;
        jwtToken: any;
        providerId: any;
        data: any;
        headers: any;
    }) => any;
    addUser: ({ token, jwtToken, manifestId, query, data, headers }: {
        token: any;
        jwtToken: any;
        manifestId: any;
        query?: {};
        data: any;
        headers: any;
    }) => any;
    removeUser: ({ token, jwtToken, manifestId, userId, headers }: {
        token: any;
        jwtToken: any;
        manifestId: any;
        userId: any;
        headers: any;
    }) => any;
    updateComment: ({ token, jwtToken, manifestId, query, data, headers }: {
        token: any;
        jwtToken: any;
        manifestId: any;
        query?: {};
        data: any;
        headers: any;
    }) => any;
    updateStatus: ({ token, jwtToken, manifestId, query, data, headers }: {
        token: any;
        jwtToken: any;
        manifestId: any;
        query?: {};
        data: any;
        headers: any;
    }) => any;
    addCapacityException: ({ token, jwtToken, manifestId, query, data, headers }: {
        token: any;
        jwtToken: any;
        manifestId: any;
        query?: {};
        data: any;
        headers: any;
    }) => any;
    removeCapacityException: ({ token, jwtToken, manifestId, exceptionId, headers }: {
        token: any;
        jwtToken: any;
        manifestId: any;
        exceptionId: any;
        headers: any;
    }) => any;
    checkIn: {
        create({ token, jwtToken, query, headers, data, manifestId, legFromId }: {
            token: any;
            jwtToken: any;
            query?: {};
            headers: any;
            data: any;
            manifestId: any;
            legFromId: any;
        }): any;
        open({ token, jwtToken, query, headers, manifestId, legFromId }: {
            token: any;
            jwtToken: any;
            query?: {};
            headers: any;
            manifestId: any;
            legFromId: any;
        }): any;
        close({ token, jwtToken, query, headers, manifestId, legFromId }: {
            token: any;
            jwtToken: any;
            query?: {};
            headers: any;
            manifestId: any;
            legFromId: any;
        }): any;
    };
    legs: {
        update({ token, jwtToken, data, query, headers, manifestId, legFromId }: {
            token: any;
            jwtToken: any;
            data: any;
            query?: {};
            headers: any;
            manifestId: any;
            legFromId: any;
        }): any;
        tickets: {
            update({ token, jwtToken, data, query, headers, manifestId, legFromId, ticketId }: {
                token: any;
                jwtToken: any;
                data: any;
                query?: {};
                headers: any;
                manifestId: any;
                legFromId: any;
                ticketId: any;
            }): any;
            noshow({ token, jwtToken, query, headers, manifestId, legFromId, ticketId }: {
                token: any;
                jwtToken: any;
                query?: {};
                headers: any;
                manifestId: any;
                legFromId: any;
                ticketId: any;
            }): any;
        };
    };
    reports: {
        get({ token, jwtToken, query, responseType, id, headers }: {
            token: any;
            jwtToken: any;
            query?: {};
            responseType?: string;
            id: any;
            headers: any;
        }): any;
    };
    vehicles: {
        createOrUpdate({ token, jwtToken, headers, manifestId, parcelManifestVehicle }: {
            token: any;
            jwtToken: any;
            headers: any;
            manifestId: any;
            parcelManifestVehicle: any;
        }): any;
    };
};
