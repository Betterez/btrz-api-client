### Philosophy

We are starting to build a relatively complex code base that would have to go over several iterations and refactor cycles until the APIs are polished enough to be able to be used by the widely range of application we have in Betterez, so let's keep it simple for now

### Unit Test

```
npm test
```

### Test integration

First run the api inventory server 

```
API_TOKEN=<some token> npm run test:integration
```

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

### How to use it

````

const client = require("btrz-api-client").createClient({ baseURL: `http://localhost:${port}` });

client.inventory.products.all() => Promise

````
