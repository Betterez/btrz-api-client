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
        update({ jwtToken, headers, oxxoToken, query, referenceNumber, data, internalAuthTokenProvider }: {
            jwtToken: any;
            headers: any;
            oxxoToken: any;
            query: any;
            referenceNumber: any;
            data: any;
            internalAuthTokenProvider: any;
        }): any;
        reverse({ token, jwtToken, headers, query, referenceNumber, data, internalAuthTokenProvider, oxxoToken }: {
            token: any;
            jwtToken: any;
            headers: any;
            query: any;
            referenceNumber: any;
            data: any;
            internalAuthTokenProvider: any;
            oxxoToken: any;
        }): any;
    };
};
