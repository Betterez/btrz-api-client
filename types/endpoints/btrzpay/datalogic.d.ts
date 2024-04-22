export = datalogicFactory;
declare function datalogicFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
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
};
