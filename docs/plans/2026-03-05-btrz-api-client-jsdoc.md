---
name: btrz-api-client JSDoc
overview: Add and standardize JSDoc across all functions in btrz-api-client/src, and document payload/query/response shapes by cross-referencing the btrz-api-* backend handler specs and models.
todos: []
isProject: false
---

# btrz-api-client JSDoc Documentation Plan

**Goal:** Ensure every function in [src](src/) has proper JSDoc, and that payload/query (and where useful, response) structures are documented by cross-checking with the endpoints they call in the btrz-api-* repositories.

---

## Current state

- **~219 JS files** under `src/` (endpoint modules under `src/endpoints/`, plus [client.js](src/client.js), [endpoints_helpers.js](src/endpoints/endpoints_helpers.js), [constants.js](src/constants.js), [productionDefaults.js](src/productionDefaults.js)).
- **client.js**: `clientFactory` has full JSDoc; the `create*` functions (createInventory, createAccounts, createNotifications, etc.) have no JSDoc.
- **endpoints_helpers.js**: `authorizationHeaders` has no JSDoc.
- **Endpoint modules**: Each file exports a factory (e.g. `emailTemplatesFactory`) that returns an object of methods (e.g. `get`, `all`, `create`, `update`, `remove`). Most of these methods have **no JSDoc**. Exceptions with partial/full JSDoc include [cancellations.js](src/endpoints/sales/cancellations.js) (typedefs + full per-function docs), [lexicons.js](src/endpoints/accounts/lexicons.js) (partial), [vehicle-types.js](src/endpoints/inventory/vehicle-types.js), and a few others.

---

## Where to get payload/query/response shapes

Backend APIs (btrz-api-accounts, btrz-api-inventory, btrz-api-notifications, btrz-api-operations, btrz-api-sales, btrz-api-invoices, etc.) document their APIs via:

1. **Handler `getSpec()`** – In each handler file (e.g. `btrz-api-accounts/resources/email-templates/handlers/get-handler.js`), `getSpec()` defines:
   - `parameters`: query (paramTypes.query), body (paramTypes.body with schema name), path
   - `responses`: status codes and `schema: { $ref: "#/definitions/..." }`
   - `type`: response type name
2. **Models** – In `resources/<resource>/models/*.js` (e.g. `btrz-api-accounts/resources/email-templates/models/email-template.js`), schema definitions (EmailTemplatePostData, GetEmailTemplatesResponse, etc.) describe property types and enums.

**Mapping client → API repo:**

| Client module (from client.js)                  | Backend repo (base path)                                                              |
| ----------------------------------------------- | ------------------------------------------------------------------------------------- |
| createAccounts → emailTemplates, lexicons, etc. | btrz-api-accounts                                                                     |
| createInventory → routes, products, etc.        | btrz-api-inventory                                                                    |
| createNotifications → pdfs, pdfData, notify     | btrz-api-notifications                                                                |
| createOperations → manifest, tickets, etc.      | btrz-api-operations                                                                   |
| createSales → cart, order, cancellations        | btrz-api-sales                                                                        |
| createInvoices → invoices, infile, etc.         | btrz-api-invoices                                                                     |
| createColtrane                                  | btrz-api-coltrane                                                                     |
| btrzpay, ratality, reports, uploads, webhooks   | Respective APIs or external; document from client code when no btrz-api-* spec exists |


---

## JSDoc standards to apply

1. **Factory functions** (e.g. `emailTemplatesFactory`): One-line description; `@param` for `{ client, internalAuthTokenProvider }`; `@returns` the public API object (e.g. `{ getTypes, all, get, create, update, remove, createSub, versions }` or a short description).
2. **Each public method**: Brief description; `@param` for the single options object, with properties documented (e.g. `@param {Object} opts`, `@param {string} [opts.token]`, `@param {string} [opts.jwtToken]`, `@param {Object} [opts.query]`, `@param {string} opts.emailTemplateId`, `@param {EmailTemplatePostData} [opts.data]` for create/update).
3. **Payload/query types**: Use `@typedef` at module or file top for request/response shapes. Name them after backend when possible (e.g. `EmailTemplatePostData`) or descriptive names (e.g. `PdfGetQuery`). Cross-check with backend handler parameters and model definitions to list allowed query keys, body shape, and notable response fields.
4. **Return type**: `@returns {Promise<import("axios").AxiosResponse<ResponseShape>>}` or `@returns {Promise<AxiosResponse>}` with a short description of `data` when the backend response type is known (from getSpec().type / definitions).
5. **Nested objects**: For `versions.update`-style nested methods, document the same way; the parent object does not need a separate JSDoc if it's just a container.

Reference implementation: [cancellations.js](src/endpoints/sales/cancellations.js) (typedefs + per-function @param/@returns).

---

## Implementation approach

Work **by domain** so that cross-checking is done once per backend repo per batch:

1. **Core / non-endpoint files**
   - [endpoints_helpers.js](src/endpoints/endpoints_helpers.js): Add JSDoc to `authorizationHeaders` (params and return).
   - [client.js](src/client.js): Add JSDoc to each `create*` function (createInventory, createAccounts, createNotifications, createOperations, createSales, createInvoices, createColtrane, createReports, createUploads, createWebhooks, createBtrzpay, createRatality, etc.): brief description, @param for options, @returns the composed client object (can be high-level, e.g. "Object with endpoint namespaces").
   - [constants.js](src/constants.js), [productionDefaults.js](src/productionDefaults.js): Add minimal JSDoc for exported object/function if needed.
2. **Accounts endpoints** (btrz-api-accounts)
   - For each file under [src/endpoints/accounts/](src/endpoints/accounts/): identify HTTP path/method from the client code, find the corresponding handler in `btrz-api-accounts/resources/<resource>/handlers/`, read getSpec() and related models, then add:
     - Module-level `@typedef` for query/payload/response where useful (aligned with handler parameters and model definitions).
     - Factory JSDoc.
     - Per-method JSDoc with @param (including query and data shapes) and @returns.
   - Example: email-templates.js → GET/POST/PUT/DELETE /email-templates, /email-templates/:id, etc.; body type EmailTemplatePostData from email-template model; query params from get-handler getSpec().
3. **Inventory endpoints** (btrz-api-inventory)
   - Same process for all files under [src/endpoints/inventory/](src/endpoints/inventory/): map URL to handler in btrz-api-inventory, then add JSDoc + typedefs from handler specs and models.
4. **Notifications endpoints** (btrz-api-notifications)
   - [pdfs.js](src/endpoints/notifications/pdfs.js), [pdf-data.js](src/endpoints/notifications/pdf-data.js), and the rest under [src/endpoints/notifications/](src/endpoints/notifications/). pdfs/pdf-data have many `query.type` branches; document the query shape (e.g. `type`, `family`, `itemId`) and return (e.g. blob vs JSON) from backend or from client usage.
5. **Operations, Sales, Invoices, Coltrane, Reports, Uploads, Webhooks, Btrzpay, Ratality**
   - Repeat the same pattern: for each endpoint file, determine the backend service and path, look up handler getSpec() and models in the corresponding btrz-api-* repo, then add JSDoc and typedefs. For external or non–btrz-api-* endpoints, document from the client code only and note in description if no backend spec was found.
6. **ESLint**
   - After changes, run the repository ESLint configuration and fix any new errors (per workspace rule).

---

## Cross-check workflow (per endpoint file)

1. From client code: note **URL path** and **method** (get/post/put/patch/delete) and **parameters** (query, data, path ids).
2. Determine **backend repo** from client.js grouping (accounts vs inventory vs notifications etc.).
3. In that repo, find the handler that registers that path (e.g. `path: "/email-templates"`, method GET).
4. From handler getSpec(): list **query parameters** (name, type, optional, enum); **body** schema name; **response** schema/type.
5. In the same repo, open the **model** that defines that schema (e.g. EmailTemplatePostData, GetEmailTemplatesResponse) and note property names, types, and enums.
6. In the client file: add or reuse **@typedef** for query/payload/response; add **@param** and **@returns** to the method so they match the backend contract.

---

## Scope and ordering

- **In scope:** All files under [src](src/) only (no lib/, no tests outside src).
- **Order:** Core files first, then accounts (many endpoints, one repo), then inventory (largest set), then notifications, operations, sales, invoices; then coltrane, reports, uploads, webhooks, btrzpay, ratality.
- **Nested methods:** Document nested objects (e.g. `versions.update`) with the same @param/@returns discipline; no need to document the parent object type in JSDoc if it's just a container of functions.

---

## Deliverables

- Every exported or public function in `src/` has JSDoc (description, @param, @returns as applicable).
- Query and payload shapes used by client methods are documented (via @param and/or @typedef), aligned with backend handler parameters and models where a btrz-api-* backend exists.
- Response shape documented where it adds value (e.g. @returns Promise or a short description of response.data).
- No new ESLint errors; existing ESLint config of the repo respected.
