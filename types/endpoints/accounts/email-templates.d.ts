export = emailTemplatesFactory;
declare function emailTemplatesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token?: any;
        jwtToken?: any;
        query?: {};
        headers?: any;
    }) => any;
    get: ({ token, jwtToken, emailTemplateId, query, headers }: {
        token?: any;
        jwtToken?: any;
        emailTemplateId: any;
        query?: {};
        headers?: any;
    }) => any;
    create: ({ token, jwtToken, data, headers }: {
        token?: any;
        jwtToken?: any;
        data: any;
        headers?: any;
    }) => any;
    update: ({ token, jwtToken, emailTemplateId, data, headers }: {
        token?: any;
        jwtToken?: any;
        emailTemplateId: any;
        data: any;
        headers?: any;
    }) => any;
    remove: ({ token, jwtToken, emailTemplateId, headers }: {
        token?: any;
        jwtToken?: any;
        emailTemplateId: any;
        headers?: any;
    }) => any;
    createSub: ({ token, jwtToken, mainTemplateId, agencyId, headers }: {
        token?: any;
        jwtToken?: any;
        mainTemplateId: any;
        agencyId: any;
        headers?: any;
    }) => any;
    versions: {
        update({ token, jwtToken, emailTemplateId, versionId, query, headers }: {
            token?: any;
            jwtToken?: any;
            emailTemplateId: any;
            versionId: any;
            query?: {};
            headers?: any;
        }): any;
    };
};
