### Philosophy

We are starting to build a relatively complex code base that would have to go over several iterations and refactor cycles until the APIs are polished enough to be able to be used by the widely range of application we have in Betterez, so let's keep it simple for now..

#### For every new endpoint

- This 4 methods should always be called the same

````
  function all({ token }): Returns all resources
  function get({ token, id }): Returns one resource
  function create({ token, resources }): Creates a new resources
  function remove({ token, id }): Remove the resource
````

- For now all other methods will be defined in RPC style, work on whatever you want and check your decisions with a teammate

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

