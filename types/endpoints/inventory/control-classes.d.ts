export = controlClassesFactory;
declare function controlClassesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ controlClassId, token, headers, jwtToken }: {
        controlClassId: any;
        token: any;
        headers: any;
        jwtToken: any;
    }) => any;
    create: ({ jwtToken, token, controlClass, headers }: {
        jwtToken: any;
        token: any;
        controlClass: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, controlClassId, controlClass, headers }: {
        jwtToken: any;
        token: any;
        controlClassId: any;
        controlClass: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, controlClassId, token, headers }: {
        jwtToken: any;
        controlClassId: any;
        token: any;
        headers: any;
    }) => any;
};
