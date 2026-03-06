export = voucherFactory;
/**
 * Query parameters for GET /vouchers/{internalId} (btrz-api-sales getSpec).
 * @typedef {Object} VoucherGetQuery
 * @property {string} [firstName] - First name of the customer
 * @property {string} [lastName] - Last name of the customer
 * @property {string} [cartId] - Validates if voucher applies to any item in the cart; overrides productType, from, to, fareTypes
 * @property {string} [productType] - Product type of the voucher
 * @property {string} [from] - Station "from" to validate if voucher has routes
 * @property {string} [to] - Station "to" to validate if voucher has routes
 * @property {string} [fareTypes] - (DEPRECATED) Validates if voucher has one fare
 * @property {string} [fareIds] - Validates if voucher has one fare ID
 * @property {string} [displayCurrencyCode] - Display currency code for multi-currency accounts
 */
/**
 * Options object passed to get(). The client builds the URL from voucher.number and voucher.cartId, firstName, lastName, displayCurrencyCode.
 * @typedef {Object} VoucherGetOptionsVoucher
 * @property {string} number - Voucher internal ID (path param internalId)
 * @property {string} [cartId] - Sent as query cartId
 * @property {string} [firstName] - Sent as query firstName
 * @property {string} [lastName] - Sent as query lastName
 * @property {string} [displayCurrencyCode] - Sent as query displayCurrencyCode
 */
/**
 * Factory for voucher GET API (btrz-api-sales). GET /vouchers/{internalId}.
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
declare function voucherFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
};
declare namespace voucherFactory {
    export { VoucherGetQuery, VoucherGetOptionsVoucher };
}
/**
 * Query parameters for GET /vouchers/{internalId} (btrz-api-sales getSpec).
 */
type VoucherGetQuery = {
    /**
     * - First name of the customer
     */
    firstName?: string;
    /**
     * - Last name of the customer
     */
    lastName?: string;
    /**
     * - Validates if voucher applies to any item in the cart; overrides productType, from, to, fareTypes
     */
    cartId?: string;
    /**
     * - Product type of the voucher
     */
    productType?: string;
    /**
     * - Station "from" to validate if voucher has routes
     */
    from?: string;
    /**
     * - Station "to" to validate if voucher has routes
     */
    to?: string;
    /**
     * - (DEPRECATED) Validates if voucher has one fare
     */
    fareTypes?: string;
    /**
     * - Validates if voucher has one fare ID
     */
    fareIds?: string;
    /**
     * - Display currency code for multi-currency accounts
     */
    displayCurrencyCode?: string;
};
/**
 * Options object passed to get(). The client builds the URL from voucher.number and voucher.cartId, firstName, lastName, displayCurrencyCode.
 */
type VoucherGetOptionsVoucher = {
    /**
     * - Voucher internal ID (path param internalId)
     */
    number: string;
    /**
     * - Sent as query cartId
     */
    cartId?: string;
    /**
     * - Sent as query firstName
     */
    firstName?: string;
    /**
     * - Sent as query lastName
     */
    lastName?: string;
    /**
     * - Sent as query displayCurrencyCode
     */
    displayCurrencyCode?: string;
};
