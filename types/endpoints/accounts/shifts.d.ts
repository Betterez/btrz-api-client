export = shiftsFactory;
declare function shiftsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ jwtToken, token, query, headers }: {
        jwtToken: any;
        token: any;
        query: any;
        headers: any;
    }) => any;
    get: ({ token, userId, headers }: {
        token: any;
        userId: any;
        headers: any;
    }) => any;
    create: ({ jwtToken, token, shiftData, headers }: {
        jwtToken: any;
        token: any;
        shiftData: any;
        headers: any;
    }) => any;
    update: ({ jwtToken, token, shiftId, operations, headers, query }: {
        jwtToken: any;
        token: any;
        shiftId: any;
        operations: any;
        headers: any;
        query: any;
    }) => any;
    payments: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
    };
    transactions: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
    };
    tickets: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
    };
    fees: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
    };
    refunds: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
    };
    items: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
    };
    redeemableItems: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
    };
    giftCertificates: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
    };
    parcels: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
    };
    insurances: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
    };
    invoices: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
    };
    deposits: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
        create({ jwtToken, token, shiftId, deposit, headers }: {
            jwtToken: any;
            token: any;
            shiftId: any;
            deposit: any;
            headers: any;
        }): any;
    };
    manualTickets: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
        create({ jwtToken, token, shiftId, manualTicket, headers }: {
            jwtToken: any;
            token: any;
            shiftId: any;
            manualTicket: any;
            headers: any;
        }): any;
    };
    locationClosures: {
        create({ jwtToken, token, locationClosure, headers }: {
            jwtToken: any;
            token: any;
            locationClosure: any;
            headers: any;
        }): any;
        all({ jwtToken, token, query, headers }: {
            jwtToken: any;
            token: any;
            query: any;
            headers: any;
        }): any;
        get({ token, jwtToken, locationClosureId, headers }: {
            token: any;
            jwtToken: any;
            locationClosureId: any;
            headers: any;
        }): any;
        comments: {
            create({ jwtToken, token, locationClosureId, locationClosureComment, headers }: {
                jwtToken: any;
                token: any;
                locationClosureId: any;
                locationClosureComment: any;
                headers: any;
            }): any;
        };
    };
    startingBalances: {
        create({ jwtToken, token, shiftId, startingBalance, headers }: {
            jwtToken: any;
            token: any;
            shiftId: any;
            startingBalance: any;
            headers: any;
        }): any;
    };
    purchaseLimitPayments: {
        get({ token, jwtToken, locationId, query, headers }: {
            token: any;
            jwtToken: any;
            locationId: any;
            query: any;
            headers: any;
        }): any;
    };
    salesSummary: {
        get({ token, jwtToken, shiftId, query, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            query: any;
            headers: any;
        }): any;
    };
    commissions: {
        get({ token, jwtToken, shiftId, headers }: {
            token: any;
            jwtToken: any;
            shiftId: any;
            headers: any;
        }): any;
    };
};
