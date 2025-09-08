export = vouchersFactory;
declare function vouchersFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ jwtToken, token, headers, query, voucher }: {
        jwtToken: any;
        token: any;
        headers: any;
        query?: {};
        voucher?: {};
    }) => any;
    compensations: {
        create: ({ token, jwtToken, compensation, query, headers }: {
            token: any;
            jwtToken: any;
            compensation: any;
            query?: {};
            headers: any;
        }) => any;
    };
};
