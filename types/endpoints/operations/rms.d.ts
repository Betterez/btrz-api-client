export = rmsFactory;
declare function rmsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    manifestForecasts: {
        all({ token, jwtToken, query, headers }: {
            token: any;
            jwtToken: any;
            query?: {};
            headers: any;
        }): any;
        get({ scheduleId, token, jwtToken, query, headers }: {
            scheduleId: any;
            token: any;
            jwtToken: any;
            query?: {};
            headers: any;
        }): any;
    };
};
