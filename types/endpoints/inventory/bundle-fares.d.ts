export = bundleFaresFactory;
declare function bundleFaresFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, bundleId, productId, query, headers }: {
        token: any;
        bundleId: any;
        productId: any;
        query?: {};
        headers: any;
    }) => any;
};
