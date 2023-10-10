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
        get({ token, interlineId, headers }: {
            token: any;
            interlineId: any;
            headers: any;
        }): any;
        update({ interlineId, data, token, jwtToken, headers }: {
            interlineId: any;
            data: any;
            token: any;
            jwtToken: any;
            headers: any;
        }): any;
    };
    remove({ interlineId, token, jwtToken, headers }: {
        interlineId: any;
        token: any;
        jwtToken: any;
        headers: any;
    }): any;
};
