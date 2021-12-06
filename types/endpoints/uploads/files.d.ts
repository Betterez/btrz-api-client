export = filesFactory;
declare function filesFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    upload: ({ token, formData, headers }: {
        token: any;
        formData: any;
        headers: any;
    }) => any;
};
