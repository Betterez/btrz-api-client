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
    getById: ({ token, jwtToken, query, headers, peopleLookupId }: {
        token: any;
        jwtToken: any;
        query: any;
        headers: any;
        peopleLookupId: any;
    }) => any;
    update: ({ jwtToken, token, peopleLookupId, peopleLookup, headers, query }: {
        jwtToken: any;
        token: any;
        peopleLookupId: any;
        peopleLookup: any;
        headers: any;
        query: any;
    }) => any;
    create: ({ jwtToken, token, peopleLookup, headers }: {
        jwtToken: any;
        token: any;
        peopleLookup: any;
        headers: any;
    }) => any;
    remove: ({ peopleLookupId, token, jwtToken, headers }: {
        peopleLookupId: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
