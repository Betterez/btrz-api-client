export = labelsFactory;
declare function labelsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ labelId, token, jwtToken, query, headers }: {
        labelId: any;
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ jwtToken, label, token, headers }: {
        jwtToken: any;
        label: any;
        token: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, labelId, label, headers }: {
        jwtToken: any;
        token: any;
        labelId: any;
        label: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, token, labelId, headers }: {
        jwtToken: any;
        token: any;
        labelId: any;
        headers: any;
    }) => any;
};
