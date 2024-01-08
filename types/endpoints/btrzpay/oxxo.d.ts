export = oxxoFactory;
declare function oxxoFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    token: {
        get({ jwtToken, headers, internalAuthTokenProvider }: {
            jwtToken: any;
            headers: any;
            internalAuthTokenProvider: any;
        }): any;
    };
    payments: {
        all({ jwtToken, headers, oxxoToken, query, internalAuthTokenProvider }: {
            jwtToken: any;
            headers: any;
            oxxoToken: any;
            query: any;
            internalAuthTokenProvider: any;
        }): any;
    };
};
