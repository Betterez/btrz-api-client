export = movementsFactory;
declare function movementsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, programId, query, headers }: {
        token: any;
        jwtToken: any;
        programId: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, programId, movement, query, headers }: {
        token: any;
        jwtToken: any;
        programId: any;
        movement: any;
        query?: {};
        headers: any;
    }) => any;
    balance: {
        get({ token, jwtToken, programId, customerId, query, headers }: {
            token: any;
            jwtToken: any;
            programId: any;
            customerId: any;
            query?: {};
            headers: any;
        }): any;
    };
};
