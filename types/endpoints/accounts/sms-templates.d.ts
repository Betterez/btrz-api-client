export = smsTemplatesFactory;
declare function smsTemplatesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ token, jwtToken, smsTemplateId, query, headers }: {
        token: any;
        jwtToken: any;
        smsTemplateId: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, data, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, smsTemplateId, data, headers }: {
        token: any;
        jwtToken: any;
        smsTemplateId: any;
        data: any;
        headers: any;
    }) => any;
    remove: ({ token, jwtToken, smsTemplateId, headers }: {
        token: any;
        jwtToken: any;
        smsTemplateId: any;
        headers: any;
    }) => any;
    createSub: ({ token, jwtToken, mainTemplateId, agencyId, headers }: {
        token: any;
        jwtToken: any;
        mainTemplateId: any;
        agencyId: any;
        headers: any;
    }) => any;
    versions: {
        update({ token, jwtToken, smsTemplateId, versionId, query, headers }: {
            token: any;
            jwtToken: any;
            smsTemplateId: any;
            versionId: any;
            query?: {};
            headers: any;
        }): any;
    };
};
