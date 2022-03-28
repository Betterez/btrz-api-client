export = networkFactory;
declare function networkFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    agencies: {
        all({ token, jwtToken, query, headers }: {
            token: any;
            jwtToken: any;
            query?: {};
            headers: any;
        }): any;
    };
};
