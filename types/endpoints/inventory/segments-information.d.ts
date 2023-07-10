export = segmentsInformationFactory;
declare function segmentsInformationFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ segmentInformationId, token, headers, jwtToken }: {
        segmentInformationId: any;
        token: any;
        headers: any;
        jwtToken: any;
    }) => any;
    create: ({ jwtToken, token, segmentInformation, headers }: {
        jwtToken: any;
        token: any;
        segmentInformation: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, segmentInformationId, segmentInformation, headers }: {
        jwtToken: any;
        token: any;
        segmentInformationId: any;
        segmentInformation: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, segmentInformationId, token, headers }: {
        jwtToken: any;
        segmentInformationId: any;
        token: any;
        headers: any;
    }) => any;
};
