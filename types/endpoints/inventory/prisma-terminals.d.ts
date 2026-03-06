export = prismaTerminalFactory;
/**
 * @typedef {Object} InventoryPrismaTerminalsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for prisma-terminals API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ all: function, get: function, create: function, update: function, remove: function }}
 */
declare function prismaTerminalFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    all: Function;
    get: Function;
    create: Function;
    update: Function;
    remove: Function;
};
declare namespace prismaTerminalFactory {
    export { InventoryPrismaTerminalsQuery };
}
type InventoryPrismaTerminalsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
