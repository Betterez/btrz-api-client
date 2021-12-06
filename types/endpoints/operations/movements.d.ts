export = movementsFactory;
declare function movementsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, jwtToken, movement, query, headers }: {
        token: any;
        jwtToken: any;
        movement: any;
        query?: {};
        headers: any;
    }) => any;
};
