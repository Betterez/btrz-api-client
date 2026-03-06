export = pdfFactory;
/**
 * @typedef {Object} PdfGetQuery
 * @property {string} type - Document type: "product" | "giftCertificate" | "voucher" | "transaction" | "ssr" | "manifest" | "passengersManifest" | "order" | "shift" | "remainderSlip" | "exchange" | "invoice" | "locationClosure" | "parcelManifest" | "startingBalance" | "partialShiftDeposits" | "shiftLocationClosure" | "bankDepositSlip" | "terminalVoucher" | "manualTickets"
 * @property {string} [family] - When type is "product": "ticket" | "reservation" | "paid in" | "paid out" | "parcel" | "flexpass" | "bundle"
 */
/**
 * Factory for PDF binary endpoints (btrz-api-notifications). Resolves URL by query.type (and query.family when type is "product").
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function }}
 */
declare function pdfFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
};
declare namespace pdfFactory {
    export { PdfGetQuery };
}
type PdfGetQuery = {
    /**
     * - Document type: "product" | "giftCertificate" | "voucher" | "transaction" | "ssr" | "manifest" | "passengersManifest" | "order" | "shift" | "remainderSlip" | "exchange" | "invoice" | "locationClosure" | "parcelManifest" | "startingBalance" | "partialShiftDeposits" | "shiftLocationClosure" | "bankDepositSlip" | "terminalVoucher" | "manualTickets"
     */
    type: string;
    /**
     * - When type is "product": "ticket" | "reservation" | "paid in" | "paid out" | "parcel" | "flexpass" | "bundle"
     */
    family?: string;
};
