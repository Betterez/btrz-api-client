export = outlookTripsFactory;
declare function outlookTripsFactory({ client }: {
    client: any;
}): {
    get: ({ token, query, headers }: {
        token: any;
        query?: {};
        headers: any;
    }) => any;
};
