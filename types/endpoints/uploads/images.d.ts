export = imagesFactory;
declare function imagesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, jwtToken, formData, headers }: {
        token: any;
        jwtToken: any;
        formData: any;
        headers: any;
    }) => any;
};
