export = terminalPaymentsFactory;
declare function terminalPaymentsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    mit: {
        update({ token, jwtToken, id, payment, query, headers }: {
            token: any;
            jwtToken: any;
            id: any;
            payment: any;
            query?: {};
            headers: any;
        }): any;
    };
};
