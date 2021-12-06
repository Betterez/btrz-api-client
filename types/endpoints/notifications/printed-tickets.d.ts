export = printedTicketsFactory;
declare function printedTicketsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: ({ token, jwtToken, responseType, trxId, lang, date, headers }: {
        token: any;
        jwtToken: any;
        responseType?: string;
        trxId: any;
        lang: any;
        date: any;
        headers: any;
    }) => any;
};
