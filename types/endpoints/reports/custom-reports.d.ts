export = customReportsFactory;
declare function customReportsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, customReport, jwtToken, headers }: {
        token: any;
        customReport: any;
        jwtToken: any;
        headers: any;
    }) => any;
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    remove: ({ token, jwtToken, customReportId, headers }: {
        token: any;
        jwtToken: any;
        customReportId: any;
        headers: any;
    }) => any;
};
