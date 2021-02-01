### For every new endpoint

- This 4 methods should always be called the same

````
  function all({ token, query, [jwtToken] }): Returns all resources
  function get({ token, id.[jwtToken] }): Returns one resource
  function create({jwtToken, token, resource }): Creates a new resource
  function update({jwtToken, token, id, resource}): Updates a resource with the given id
  function remove({jwtToken token, id }): Remove the resource
````

`jwtToken` Is only required in certain endpoints, check the endpoint documentation.

### How to use it

- Using defaults

````
const api = require("btrz-api-client").createApiClient({ baseURL: `http://localhost:${port}` });
api.inventory.products.all({ token, query }) => Promise
````

- You can still perform custom requests

````
const api = require("btrz-api-client").createApiClient({ baseURL: 'http://localhost:8080', });
api._cleanClient({ url: `/inventory/products`, headers: { 'x-api-key': token }, params: { isParcel: true } }) => Promise

````

- Ready for production

> This client uses production defaults if none provided, check `/src/productionDefaults.js`

````
const api = require("btrz-api-client").createApiClient();
api.inventory.products.all({ token, query }) //you're now talking to production!
````

#### Performing internal service-to-service calls

Provide an object that generates internal auth tokens when you create the API Client:

```
const InternalAuthTokenProvider = require("btrz-auth-api-key").InternalAuthTokenProvider,
    tokenProviderOptions = {
        internalAuthTokenSigningSecrets: {
            main: "<some_secret_signing_key>"
        }
    },
    internalAuthTokenProvider = new InternalAuthTokenProvider(tokenProviderOptions),
    ApiClient = require("btrz-api-client"),
    apiClient = ApiClient.createApiClient({
        internalAuthTokenProvider,
        // ... plus any other options
    });
```

Then, to perform a service-to-service call with an auto-generated token:

```
const apiRequest = apiClient.operations.manifest.getOrCreate({
    token: <user_api_key>,
    jwtToken: "internal_auth_token",   // Use this exact string
    query: {
        ...
    }
});
```

### Unit Test

```
npm test
```

### Test integration

```
API_TOKEN=<some token> npm run test:integration
```

> You can specify the different ports for every endpoint using `/test-integration/ports.js`

### Folders structure

````

- src
  - enpoints
    - inventory
      - products.js
- test
  - endpoints
    - inventory
      - products.test.js

- test-integration
  - endpoints
    - inventory
      - products.test.js

````

### Push a new version

Run

```
npm version [major || minor || patch]
```

This will increment the version number according to your selection (major, minor or patch) and push a new TAG. There's no need to release a new version in the github UI.
