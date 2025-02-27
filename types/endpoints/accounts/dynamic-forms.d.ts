export = dynamicFormsFactory;
declare function dynamicFormsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, dynamicFormId, query, headers, providerId }: {
        token: any;
        jwtToken: any;
        dynamicFormId: any;
        query?: {};
        headers: any;
        providerId: any;
    }) => any;
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, query, data, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        data: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, dynamicFormId, data, headers }: {
        token: any;
        jwtToken: any;
        dynamicFormId: any;
        data: any;
        headers: any;
    }) => any;
    fields: {
        get({ token, jwtToken, dynamicFormFieldId, headers }?: {}): any;
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
