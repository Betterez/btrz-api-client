export = programsFactory;
declare function programsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, context, query, headers }: {
        token: any;
        context: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, program, headers }: {
        token: any;
        jwtToken: any;
        program: any;
        headers: any;
    }) => any;
    put: ({ token, jwtToken, programId, program, headers }: {
        token: any;
        jwtToken: any;
        programId: any;
        program: any;
        headers: any;
    }) => any;
};
