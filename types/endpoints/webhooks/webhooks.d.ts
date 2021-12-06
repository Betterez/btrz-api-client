export = webhooksFactory;
declare function webhooksFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    emit: ({ token, jwtToken, webhook, headers }: {
        token: any;
        jwtToken: any;
        webhook: any;
        headers: any;
    }) => any;
};
