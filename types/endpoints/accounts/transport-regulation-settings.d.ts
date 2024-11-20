export = transportRegulationSettingsForCNRT;
declare function transportRegulationSettingsForCNRT({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, headers }: {
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, transportRegulationSettings, headers }: {
        token: any;
        jwtToken: any;
        transportRegulationSettings: any;
        headers: any;
    }) => any;
};
