export = emailTemplatesFactory;
/**
 * @typedef {Object} EmailTemplatesListQuery
 * @property {string} [providerId] - Filter by provider account (ObjectId)
 * @property {string} [type] - Filter by template type
 * @property {string} [channel] - backoffice | agency-backoffice | websales | agency-websales | any | mobileapp
 * @property {string} [sort] - relevance | natural | createdAsc | createdDesc | updatedAsc | updatedDesc
 * @property {string} [templateCollectionId] - default | custom
 * @property {string} [status] - draft | published
 * @property {string} [mainTemplateAccountId] - Filter by source provider (ObjectId)
 * @property {string} [lang] - ISO language code (e.g. en-us)
 * @property {number} [page] - 1-based page for pagination
 */
/**
 * @typedef {Object} EmailTemplatePostData
 * @property {string} name - Template name
 * @property {string} type - Template type
 * @property {string} subject - Subject line (plain text + Liquid)
 * @property {string} lang - ISO language code (e.g. en-us)
 * @property {string} htmlTemplate - HTML body (no scripts)
 * @property {string} txtTemplate - Plain text body (no HTML)
 * @property {string} [channel] - any (default) or other channel
 * @property {string} [status] - draft | published
 * @property {string} [templateCollectionId] - default | custom (required for accountId "")
 * @property {string} [accountId] - "" for global template (super user)
 */
/**
 * Factory for email-templates API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ getTypes: function, all: function, get: function, create: function, update: function, remove: function, createSub: function, versions: { update: function } }}
 */
declare function emailTemplatesFactory({ client, internalAuthTokenProvider }: {
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
declare namespace emailTemplatesFactory {
    export { EmailTemplatesListQuery, EmailTemplatePostData };
}
type EmailTemplatesListQuery = {
    /**
     * - Filter by provider account (ObjectId)
     */
    providerId?: string;
    /**
     * - Filter by template type
     */
    type?: string;
    /**
     * - backoffice | agency-backoffice | websales | agency-websales | any | mobileapp
     */
    channel?: string;
    /**
     * - relevance | natural | createdAsc | createdDesc | updatedAsc | updatedDesc
     */
    sort?: string;
    /**
     * - default | custom
     */
    templateCollectionId?: string;
    /**
     * - draft | published
     */
    status?: string;
    /**
     * - Filter by source provider (ObjectId)
     */
    mainTemplateAccountId?: string;
    /**
     * - ISO language code (e.g. en-us)
     */
    lang?: string;
    /**
     * - 1-based page for pagination
     */
    page?: number;
};
type EmailTemplatePostData = {
    /**
     * - Template name
     */
    name: string;
    /**
     * - Template type
     */
    type: string;
    /**
     * - Subject line (plain text + Liquid)
     */
    subject: string;
    /**
     * - ISO language code (e.g. en-us)
     */
    lang: string;
    /**
     * - HTML body (no scripts)
     */
    htmlTemplate: string;
    /**
     * - Plain text body (no HTML)
     */
    txtTemplate: string;
    /**
     * - any (default) or other channel
     */
    channel?: string;
    /**
     * - draft | published
     */
    status?: string;
    /**
     * - default | custom (required for accountId "")
     */
    templateCollectionId?: string;
    /**
     * - "" for global template (super user)
     */
    accountId?: string;
};
