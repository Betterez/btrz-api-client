export = transportRegulationsFactory;
declare function transportRegulationsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    cnrt: {
        create({ data, token, jwtToken, headers }: {
            data: any;
            token: any;
            jwtToken: any;
            headers: any;
        }): any;
    };
};
