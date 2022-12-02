export = reportEmailFactory;
declare function reportEmailFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    post: ({ token, jwtToken, report, headers }: {
        token: any;
        jwtToken: any;
        report: any;
        headers: any;
    }) => any;
};
