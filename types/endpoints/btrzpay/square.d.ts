export function squareWebhooksFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    create: ({ token, jwtToken, data, providerId, headers }: {
        token: any;
        jwtToken: any;
        data: any;
        providerId: any;
        headers: any;
    }) => any;
};
export function squareTerminalsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, headers }: {
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
};
