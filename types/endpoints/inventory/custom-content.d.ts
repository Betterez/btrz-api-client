export = customContentFactory;
declare function customContentFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ customContentId, token, headers }: {
        customContentId: any;
        token: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, customContent, headers }: {
        jwtToken: any;
        token: any;
        customContent: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, customContentId, customContent, headers }: {
        jwtToken: any;
        token: any;
        customContentId: any;
        customContent: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, customContentId, token, headers }: {
        jwtToken: any;
        customContentId: any;
        token: any;
        headers: any;
    }) => any;
};
