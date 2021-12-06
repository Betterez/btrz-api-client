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
    update: ({ jwtToken, token, printSettings, headers }: {
        jwtToken: any;
        token: any;
        printSettings: any;
        headers: any;
    }) => any;
    productTemplates: {
        create({ jwtToken, token, productTemplate, headers }: {
            jwtToken: any;
            token: any;
            productTemplate: any;
            headers: any;
        }): any;
        remove({ productTemplateId, token, jwtToken, headers }: {
            productTemplateId: any;
            token: any;
            jwtToken: any;
            headers: any;
        }): any;
    };
};
