export = operationMessagesFactory;
declare function operationMessagesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, operationMessageId, headers }: {
        token: any;
        operationMessageId: any;
        headers: any;
    }) => any;
    all: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, opMsgData, headers }: {
        token: any;
        jwtToken: any;
        opMsgData: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, operationMessageId, opMsgData, headers }: {
        token: any;
        jwtToken: any;
        operationMessageId: any;
        opMsgData: any;
        headers: any;
    }) => any;
    remove: ({ jwtToken, operationMessageId, token, headers }: {
        jwtToken: any;
        operationMessageId: any;
        token: any;
        headers: any;
    }) => any;
    getByStation: ({ token, jwtToken, opMsgData, headers }: {
        token: any;
        jwtToken: any;
        opMsgData: any;
        headers: any;
    }) => any;
};
