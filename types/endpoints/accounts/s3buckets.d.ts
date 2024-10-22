export = s3BucketsFactory;
declare function s3BucketsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    update: ({ jwtToken, token, bucketId, s3BucketData, headers }: {
        jwtToken: any;
        token: any;
        bucketId: any;
        s3BucketData: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, token, bucketId, headers }: {
        jwtToken: any;
        token: any;
        bucketId: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, s3BucketData, headers }: {
        jwtToken: any;
        token: any;
        s3BucketData: any;
        headers: any;
    }) => any;
};
