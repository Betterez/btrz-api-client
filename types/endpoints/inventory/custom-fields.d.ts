export = customFieldsFactory;
declare function customFieldsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    get: ({ fieldId, token, jwtToken, query, headers }: {
        fieldId: any;
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, field, headers }: {
        token: any;
        jwtToken: any;
        field: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, fieldId, field, headers }: {
        token: any;
        jwtToken: any;
        fieldId: any;
        field: any;
        headers: any;
    }) => any;
    types: {
        all({ token, headers }: {
            token: any;
            headers: any;
        }): any;
    };
};
