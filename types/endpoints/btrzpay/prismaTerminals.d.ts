export = prismaTerminalsFactory;
declare function prismaTerminalsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    payments: {
        get({ token, jwtToken, id, query, headers }: {
            token: any;
            jwtToken: any;
            id: any;
            query: any;
            headers: any;
        }): any;
        create({ token, jwtToken, prismaPayment, headers }: {
            token: any;
            jwtToken: any;
            prismaPayment: any;
            headers: any;
        }): any;
        reversals: {
            get({ token, jwtToken, id, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                query: any;
                headers: any;
            }): any;
            create({ token, jwtToken, id, prismaReversal, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                prismaReversal: any;
                headers: any;
            }): any;
        };
    };
};
