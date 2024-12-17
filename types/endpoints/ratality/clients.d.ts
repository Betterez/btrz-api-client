export = clientsFactory;
declare function clientsFactory({ client, version }: {
    client: any;
    version: any;
}): {
    create: ({ jwtToken, data, headers }: {
        jwtToken: any;
        data: any;
        headers: any;
    }) => any;
    get: ({ jwtToken, clientId }: {
        jwtToken: any;
        clientId: any;
    }) => any;
};
