export = healthCheckFactory;
declare function healthCheckFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    get: () => any;
};
