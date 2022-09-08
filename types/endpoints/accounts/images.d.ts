export = ImagesFactory;
declare function ImagesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, jwtToken, query, headers, imageId }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
        imageId: any;
    }) => any;
    create: ({ jwtToken, token, image, headers }: {
        jwtToken: any;
        token: any;
        image: any;
        headers: any;
    }) => any;
    remove: ({ imageId, token, jwtToken, headers }: {
        imageId: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
