export = scannerAppLocationFactory;
declare function scannerAppLocationFactory({ client }: {
    client: any;
}): {
    get: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
};
