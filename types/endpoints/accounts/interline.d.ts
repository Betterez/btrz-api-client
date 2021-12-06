export = interlineFactory;
declare function interlineFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    invitations: {
        all({ token, jwtToken, query, headers }: {
            token: any;
            jwtToken: any;
            query?: {};
            headers: any;
        }): any;
        get({ token, invitationId, headers }: {
            token: any;
            invitationId: any;
            headers: any;
        }): any;
        create({ data, token, jwtToken, headers }: {
            data: any;
            token: any;
            jwtToken: any;
            headers: any;
        }): any;
        update({ invitationId, data, token, jwtToken, headers }: {
            invitationId: any;
            data: any;
            token: any;
            jwtToken: any;
            headers: any;
        }): any;
    };
    consumers: {
        all({ token, jwtToken, query, headers }: {
            token: any;
            jwtToken: any;
            query?: {};
            headers: any;
        }): any;
    };
    providers: {
        all({ token, jwtToken, query, headers }: {
            token: any;
            jwtToken: any;
            query?: {};
            headers: any;
        }): any;
    };
    network: {
        get({ token, networkId, headers }: {
            token: any;
            networkId: any;
            headers: any;
        }): any;
        update({ networkId, data, token, jwtToken, headers }: {
            networkId: any;
            data: any;
            token: any;
            jwtToken: any;
            headers: any;
        }): any;
        remove({ networkId, token, jwtToken, headers }: {
            networkId: any;
            token: any;
            jwtToken: any;
            headers: any;
        }): any;
    };
};
