export = docsFactory;
declare function docsFactory({ client }: {
    client: any;
}): {
    get: () => any;
};
