export = promoCampaignCalendarFactory;
/**
 * The excluded travel dates of a promo campaign. No promo of the campaign applies to tickets that travel on those dates.
 * @typedef {Object} PromoCampaignCalendar
 * @property {string} campaign - The campaign name, as written on the promos (compared trimmed and case insensitive)
 * @property {string[]} excludedTravelDates - Local travel dates (YYYY-MM-DD), sorted
 */
/**
 * Factory for the promo campaign calendar API (btrz-api-inventory).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ get: function, update: function }}
 */
declare function promoCampaignCalendarFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): {
    get: Function;
    update: Function;
};
declare namespace promoCampaignCalendarFactory {
    export { PromoCampaignCalendar };
}
/**
 * The excluded travel dates of a promo campaign. No promo of the campaign applies to tickets that travel on those dates.
 */
type PromoCampaignCalendar = {
    /**
     * - The campaign name, as written on the promos (compared trimmed and case insensitive)
     */
    campaign: string;
    /**
     * - Local travel dates (YYYY-MM-DD), sorted
     */
    excludedTravelDates: string[];
};
