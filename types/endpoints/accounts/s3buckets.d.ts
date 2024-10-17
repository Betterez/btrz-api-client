export = s3BucketsFactory;
declare function s3BucketsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    update: ({ jwtToken, token, bucketId, application, headers }: {
        jwtToken: any;
        token: any;
        bucketId: any;
        application: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, token, bucketId, headers }: {
        jwtToken: any;
        token: any;
        bucketId: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, application, headers }: {
        jwtToken: any;
        token: any;
        application: any;
        headers: any;
    }) => any;
};
