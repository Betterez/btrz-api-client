export = twilioFactory;
declare function twilioFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    phoneNumbers: {
        all({ isocode, token, jwtToken, query, headers }: {
            isocode: any;
            token: any;
            jwtToken: any;
            query?: {};
            headers: any;
        }): any;
        create({ token, jwtToken, phoneNumberData, headers }: {
            token: any;
            jwtToken: any;
            phoneNumberData?: {};
            headers: any;
        }): any;
    };
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
