export = terminalPaymentsFactory;
declare function terminalPaymentsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    mit: {
        update({ token, jwtToken, id, terminalPayment, query, headers }: {
            token: any;
            jwtToken: any;
            id: any;
            terminalPayment: any;
            query?: {};
            headers: any;
        }): any;
        get({ token, jwtToken, id, query, headers }: {
            token: any;
            jwtToken: any;
            id: any;
            query?: {};
            headers: any;
        }): any;
    };
    webhooks: {
        getnet({ data, providerId, headers, token, jwtToken }: {
            data: any;
            providerId: any;
            headers?: {};
            token: any;
            jwtToken: any;
        }): any;
    };
};
