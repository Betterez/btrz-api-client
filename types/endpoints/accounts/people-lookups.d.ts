export = peopleLookupsFactory;
declare function peopleLookupsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers, providerId }: {
        token: any;
        jwtToken: any;
        query: any;
        headers: any;
        providerId: any;
    }) => any;
    getById: ({ token, jwtToken, query, headers, personId, providerId }: {
        token: any;
        jwtToken: any;
        query: any;
        headers: any;
        personId: any;
        providerId: any;
    }) => any;
    update: ({ jwtToken, token, personId, person, headers, providerId }: {
        jwtToken: any;
        token: any;
        personId: any;
        person: any;
        headers: any;
        providerId: any;
    }) => any;
    create: ({ jwtToken, token, person, headers, providerId }: {
        jwtToken: any;
        token: any;
        person: any;
        headers: any;
        providerId: any;
    }) => any;
    remove: ({ personId, token, jwtToken, headers }: {
        personId: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
