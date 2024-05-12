export = datalogicFactory;
declare function datalogicFactory({ client }: {
    client: any;
}): {
    payments: {
        all({ token, jwtToken, headers, query, internalAuthTokenProvider }: {
            token: any;
            jwtToken: any;
            headers: any;
            query: any;
            internalAuthTokenProvider: any;
        }): any;
        update({ token, jwtToken, headers, query, referenceNumber, data, internalAuthTokenProvider }: {
            token: any;
            jwtToken: any;
            headers: any;
            query: any;
            referenceNumber: any;
            data: any;
            internalAuthTokenProvider: any;
        }): any;
    };
    referenceNumber: {
        get({ token, jwtToken, headers, internalAuthTokenProvider }: {
            token: any;
            jwtToken: any;
            headers: any;
            internalAuthTokenProvider: any;
        }): any;
    };
    authCode: {
        get({ token, jwtToken, headers, internalAuthTokenProvider }: {
            token: any;
            jwtToken: any;
            headers: any;
            internalAuthTokenProvider: any;
        }): any;
    };
};
