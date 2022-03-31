export function cardpointeTerminalsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, headers }: {
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    remove: ({ token, jwtToken, merchantId, terminalId, headers }: {
        token: any;
        jwtToken: any;
        merchantId: any;
        terminalId: any;
        headers: any;
    }) => any;
    readCard: {
        get({ token, jwtToken, readCardResultId, headers }: {
            token: any;
            jwtToken: any;
            readCardResultId: any;
            headers: any;
        }): any;
        create({ token, jwtToken, readCard, headers }: {
            token: any;
            jwtToken: any;
            readCard: any;
            headers: any;
        }): any;
    };
    ping: {
        create({ token, jwtToken, ping, headers }: {
            token: any;
            jwtToken: any;
            ping: any;
            headers: any;
        }): any;
    };
};
