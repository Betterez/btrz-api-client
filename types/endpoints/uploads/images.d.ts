export = imagesFactory;
declare function imagesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, formData, headers }: {
        token: any;
        formData: any;
        headers: any;
    }) => any;
};
