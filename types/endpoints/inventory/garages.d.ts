export = garagesFactory;
declare function garagesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, jwtToken, garageId, headers }: {
        token: any;
        jwtToken: any;
        garageId: any;
        headers: any;
    }) => any;
    create: ({ token, jwtToken, data, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, garageId, data, headers }: {
        token: any;
        jwtToken: any;
        garageId: any;
        data: any;
        headers: any;
    }) => any;
};
