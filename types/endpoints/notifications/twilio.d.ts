export = twilioFactory;
/**
 * Query params for GET /twilio/phone-numbers/:isocode (btrz-api-notifications). Forwarded to API as-is.
 * @typedef {Object} TwilioPhoneNumbersListQuery
 */
/**
 * Factory for twilio API (btrz-api-notifications).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ phoneNumbers: { all: function, create: function }, sms: { create: function }, whatsapp: { create: function } }}
 */
declare function twilioFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    phoneNumbers: {
        all: Function;
        create: Function;
    };
    sms: {
        create: Function;
    };
    whatsapp: {
        create: Function;
    };
};
declare namespace twilioFactory {
    export { TwilioPhoneNumbersListQuery };
}
/**
 * Query params for GET /twilio/phone-numbers/:isocode (btrz-api-notifications). Forwarded to API as-is.
 */
type TwilioPhoneNumbersListQuery = any;
