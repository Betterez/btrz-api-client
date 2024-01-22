export = operatingCompaniesFactory;
declare function operatingCompaniesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, jwtToken, query, headers }: {
        token: any;
        jwtToken: any;
        query?: {};
        headers: any;
    }) => any;
    create: ({ token, jwtToken, operatingCompany, headers }: {
        token: any;
        jwtToken: any;
        operatingCompany: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, operatingCompanyId, operatingCompany, headers }: {
        jwtToken: any;
        token: any;
        operatingCompanyId: any;
        operatingCompany: any;
        headers: any;
    }) => any;
    get: ({ token, operatingCompanyId, jwtToken, headers }: {
        token: any;
        operatingCompanyId: any;
        jwtToken: any;
        headers: any;
    }) => any;
    sequences: {
        create({ jwtToken, token, operatingCompanyId, sequence, headers }: {
            jwtToken: any;
            token: any;
            operatingCompanyId: any;
            sequence: any;
            headers: any;
        }): any;
        all({ jwtToken, token, operatingCompanyId, headers }: {
            jwtToken: any;
            token: any;
            operatingCompanyId: any;
            headers: any;
        }): any;
        get({ jwtToken, token, operatingCompanyId, sequenceId, headers }: {
            jwtToken: any;
            token: any;
            operatingCompanyId: any;
            sequenceId: any;
            headers: any;
        }): any;
        update({ jwtToken, token, operatingCompanyId, sequenceId, sequence, headers }: {
            jwtToken: any;
            token: any;
            operatingCompanyId: any;
            sequenceId: any;
            sequence: any;
            headers: any;
        }): any;
    };
};
