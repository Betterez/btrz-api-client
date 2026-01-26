export = lexiconsFactory;

declare function lexiconsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, context, query, headers }: {
        token: any;
        context: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, lexiconEntries, headers }: {
        token: any;
        jwtToken: any;
        lexiconEntries: any;
        headers: any;
    }) => any;
    createOrUpdateMany: ({ token, jwtToken, entries, headers }: {
        token: any;
        jwtToken: any;
        entries: any;
        headers: any;
    }) => any;
    updateMany: ({ token, jwtToken, updates, headers }: {
        token: any;
        jwtToken: any;
        updates: any;
        headers: any;
    }) => any;
    suggestions: {
        list: (opts: { token?: string; jwtToken?: string; headers?: any; params?: { status?: string; lang?: string; key?: string; superUserId?: string; superUserHash?: string } }) => any;
        getById: (opts: { token?: string; jwtToken?: string; headers?: any; suggestionId: string; params?: { superUserId?: string; superUserHash?: string } }) => any;
        update: (opts: { token?: string; jwtToken?: string; headers?: any; suggestionId: string; data: { status: string; rejected_reason?: string }; superUserId: string; superUserHash: string }) => any;
    };
};
