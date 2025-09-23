export = notifyVoucherFactory;
declare function notifyVoucherFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create({ token, jwtToken, query, data, headers }: {
        token: any;
        jwtToken: any;
        query: any;
        data: any;
        headers: any;
    }): any;
};
