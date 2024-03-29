export = printSettingsFactory;
declare function printSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query: any;
        headers: any;
    }) => any;
    get: ({ token, query, headers, printTemplateId }: {
        token: any;
        query: any;
        headers: any;
        printTemplateId: any;
    }) => any;
    update: ({ jwtToken, token, printTemplateId, printTemplate, headers, query }: {
        jwtToken: any;
        token: any;
        printTemplateId: any;
        printTemplate: any;
        headers: any;
        query: any;
    }) => any;
    create: ({ jwtToken, token, printTemplate, headers }: {
        jwtToken: any;
        token: any;
        printTemplate: any;
        headers: any;
    }) => any;
    remove: ({ printTemplateId, token, jwtToken, headers }: {
        printTemplateId: any;
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    versions: {
        update({ printTemplateId, token, jwtToken, headers, query, versionId }: {
            printTemplateId: any;
            token: any;
            jwtToken: any;
            headers: any;
            query: any;
            versionId: any;
        }): any;
    };
};
