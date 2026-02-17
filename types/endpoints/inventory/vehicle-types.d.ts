export = vehicleTypesFactory;
declare function vehicleTypesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    all: ({ token, query, headers }: {
        token: string;
        query?: any;
        headers?: any;
    }) => Promise<{
        data: {
            vehicleTypes: Array<{
                _id: string;
                name: string;
            }>;
        };
    }>;
};
