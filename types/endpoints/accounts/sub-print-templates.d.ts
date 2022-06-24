export = subPrintTemplatesFactory;
declare function subPrintTemplatesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ jwtToken, token, subPrintTemplate, headers }: {
        jwtToken: any;
        token: any;
        subPrintTemplate: any;
        headers: any;
    }) => any;
};
