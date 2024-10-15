export = ticketMovementSettingsFactory;
declare function ticketMovementSettingsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, headers }: {
        token: any;
        jwtToken: any;
        headers: any;
    }) => any;
    update: ({ token, jwtToken, ticketMovementSettings, headers }: {
        token: any;
        jwtToken: any;
        ticketMovementSettings: any;
        headers: any;
    }) => any;
};
