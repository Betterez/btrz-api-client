export = loansFactory;
declare function loansFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ loanId, token, headers }: {
        loanId: any;
        token: any;
        headers: any;
    }) => any;
};
