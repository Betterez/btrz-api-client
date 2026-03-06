export = prismaTerminalsFactory;
/**
 * @typedef {Object} PrismaTerminalsQuery
 * @property {string} [providerId] - Account provider/operator ID for agencies/sellers
 * @property {boolean} [validateRefund] - (PUT refunds only) If true, fetch current state from Prisma before applying
 */
/**
 * Factory for Prisma terminals API (btrz-api-payments).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ payments: Object, settlements: Object }}
 */
declare function prismaTerminalsFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    payments: any;
    settlements: any;
};
declare namespace prismaTerminalsFactory {
    export { PrismaTerminalsQuery };
}
type PrismaTerminalsQuery = {
    /**
     * - Account provider/operator ID for agencies/sellers
     */
    providerId?: string;
    /**
     * - (PUT refunds only) If true, fetch current state from Prisma before applying
     */
    validateRefund?: boolean;
};
