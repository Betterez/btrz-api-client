export = voucherFactory;
declare function voucherFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, voucher, headers }: {
        token: any;
        voucher: any;
        headers: any;
    }) => any;
};
