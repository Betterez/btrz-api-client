export = twilioFactory;
declare function twilioFactory({ client, internalAuthTokenProvider }: {
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
    whatsapp: {
        create({ token, jwtToken, whatsappMsg, headers }: {
            token: any;
            jwtToken: any;
            whatsappMsg?: {};
            headers: any;
        }): any;
    };
};
