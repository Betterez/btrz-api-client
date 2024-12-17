export = authFactory;
declare function authFactory({ client }: {
    client: any;
}): {
    create: ({ data, headers }: {
        data: any;
        headers: any;
    }) => any;
};
