export = prismaTerminalsFactory;
declare function prismaTerminalsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    payments: {
        get({ token, jwtToken, id, headers }: {
            token: any;
            jwtToken: any;
            id: any;
            headers: any;
        }): any;
        create({ token, jwtToken, prismaPayment, headers }: {
            token: any;
            jwtToken: any;
            prismaPayment: any;
            headers: any;
        }): any;
    };
};
