export = peopleLookupsFactory;
declare function peopleLookupsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query: any;
        headers: any;
    }) => any;
    getById: ({ token, jwtToken, query, headers, personId }: {
        token: any;
        jwtToken: any;
        query: any;
        headers: any;
        personId: any;
    }) => any;
    update: ({ jwtToken, token, personId, person, headers }: {
        jwtToken: any;
        token: any;
        personId: any;
        person: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, person, headers }: {
        jwtToken: any;
        token: any;
        person: any;
        headers: any;
    }) => any;
    remove: ({ personId, token, jwtToken, headers }: {
        personId: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
