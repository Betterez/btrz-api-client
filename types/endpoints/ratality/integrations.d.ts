export = integrationsFactory;
declare function integrationsFactory({ client, version }: {
    client: any;
    version: any;
}): {
    get: ({ jwtToken, clientId }: {
        jwtToken: any;
        clientId: any;
    }) => any;
    create: ({ jwtToken, clientId, data }: {
        jwtToken: any;
        clientId: any;
        data: any;
    }) => any;
    remove: ({ jwtToken, clientId, integrationType }: {
        jwtToken: any;
        clientId: any;
        integrationType: any;
    }) => any;
};
