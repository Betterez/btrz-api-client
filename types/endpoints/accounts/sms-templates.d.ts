export = smsTemplatesFactory;
/**
 * Factory for sms-templates API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ getTypes: function, all: function, get: function, create: function, update: function, remove: function, createSub: function, versions: { update: function } }}
 */
declare function smsTemplatesFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    getTypes: Function;
    all: Function;
    get: Function;
    create: Function;
    update: Function;
    remove: Function;
    createSub: Function;
    versions: {
        update: Function;
    };
};
