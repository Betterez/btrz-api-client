export = dynamicFormsFactory;
/**
 * Factory for dynamic-forms API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, all: function, create: function, update: function, remove: function, fields: { get: function, all: function, create: function, update: function, remove: function } }}
 */
declare function dynamicFormsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
    all: Function;
    create: Function;
    update: Function;
    remove: Function;
    fields: {
        get: Function;
        all: Function;
        create: Function;
        update: Function;
        remove: Function;
    };
};
