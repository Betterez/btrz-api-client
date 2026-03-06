export = pdfDataFactory;
/**
 * @typedef {Object} PdfDataGetQuery
 * @property {string} type - Document type; determines path. E.g. "product", "giftCertificate", "voucher", "transaction", "ssr", "manifest", "passengersManifest", "order", "order_confirmation", "cancellation", "change", "shift", "invoice", "parcelManifest", "parcel_confirmation", "redeemable_items_confirmation", "sold_item_confirmation", "customer_card_membership", "user_password_reset", "new_account", "operator_manifest_capacity", "reaccomodation", "ticket_movement", "manifest_notification", "startingBalance", "partialShiftDeposits", "shiftLocationClosure", "bankDepositSlip", "terminalVoucher", "manualTickets", etc.
 * @property {string} [family] - When type is "product": "ticket" | "reservation" | "paid in" | "paid out" | "parcel" | "flexpass" | "bundle"
 */
/**
 * Factory for PDF data (JSON) endpoints (btrz-api-notifications). Resolves URL by query.type (and query.family when type is "product").
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
declare function pdfDataFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
};
declare namespace pdfDataFactory {
    export { PdfDataGetQuery };
}
type PdfDataGetQuery = {
    /**
     * - Document type; determines path. E.g. "product", "giftCertificate", "voucher", "transaction", "ssr", "manifest", "passengersManifest", "order", "order_confirmation", "cancellation", "change", "shift", "invoice", "parcelManifest", "parcel_confirmation", "redeemable_items_confirmation", "sold_item_confirmation", "customer_card_membership", "user_password_reset", "new_account", "operator_manifest_capacity", "reaccomodation", "ticket_movement", "manifest_notification", "startingBalance", "partialShiftDeposits", "shiftLocationClosure", "bankDepositSlip", "terminalVoucher", "manualTickets", etc.
     */
    type: string;
    /**
     * - When type is "product": "ticket" | "reservation" | "paid in" | "paid out" | "parcel" | "flexpass" | "bundle"
     */
    family?: string;
};
