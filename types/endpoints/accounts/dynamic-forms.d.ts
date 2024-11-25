export = dynamicFormsFactory;
declare function dynamicFormsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    fields: {
        get({ token, jwtToken, dynamicFormFieldId, headers }?: {
            token: any;
            jwtToken: any;
            dynamicFormFieldId: any;
            headers: any;
        }): any;
        all({ token, jwtToken, query, headers }: {
            token: any;
            jwtToken: any;
            query?: {};
            headers: any;
        }): any;
        create({ jwtToken, token, data, headers }: {
            jwtToken: any;
            token: any;
            data: any;
            headers: any;
        }): any;
        update({ jwtToken, token, dynamicFormFieldId, data, headers }: {
            jwtToken: any;
            token: any;
            dynamicFormFieldId: any;
            data: any;
            headers: any;
        }): any;
    };
};
