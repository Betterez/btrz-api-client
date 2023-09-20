export = vouchersFactory;
declare function vouchersFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ jwtToken, token, headers, query, voucher, user }: {
        jwtToken: any;
        token: any;
        headers: any;
        query?: {};
        voucher?: {};
        user: any;
    }) => any;
};
