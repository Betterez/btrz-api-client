export = salesforceFactory;
declare function salesforceFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    sms: {
        create({ token, jwtToken, smsMsg, headers }: {
            token: any;
            jwtToken: any;
            smsMsg?: {};
            headers: any;
        }): any;
    };
};
