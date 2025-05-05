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
            query?: {};
            headers: any;
        }): any;
        create({ token, jwtToken, prismaPayment, query, headers }: {
            token: any;
            jwtToken: any;
            prismaPayment: any;
            query?: {};
            headers: any;
        }): any;
        delete({ token, jwtToken, id, query, headers }: {
            token: any;
            jwtToken: any;
            id: any;
            query?: {};
            headers: any;
        }): any;
        reversals: {
            get({ token, jwtToken, id, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                query?: {};
                headers: any;
            }): any;
            create({ token, jwtToken, id, prismaReversal, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                prismaReversal: any;
                query?: {};
                headers: any;
            }): any;
            delete({ token, jwtToken, id, query, headers }: {
                token: any;
                jwtToken: any;
                id: any;
                query?: {};
                headers: any;
            }): any;
        };
    };
    settlements: {
        create({ token, jwtToken, settlement, query, headers }: {
            token: any;
            jwtToken: any;
            settlement: any;
            query?: {};
            headers: any;
        }): any;
    };
};
