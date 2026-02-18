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
        get({ token, query, headers, sellerId }: {
            token: any;
            query: any;
            headers: any;
            sellerId: any;
        }): any;
        update({ jwtToken, token, sellerId, agency, headers, query }: {
            jwtToken: any;
            token: any;
            sellerId: any;
            agency: any;
            headers: any;
            query: any;
        }): any;
        create({ jwtToken, token, agency, headers }: {
            jwtToken: any;
            token: any;
            agency: any;
            headers: any;
        }): any;
        removeProduct({ token, jwtToken, productId, headers }: {
            token: any;
            jwtToken: any;
            productId: any;
            headers: any;
        }): any;
        removeFare({ token, jwtToken, fareId, headers }: {
            token: any;
            jwtToken: any;
            fareId: any;
            headers: any;
        }): any;
    };
};
