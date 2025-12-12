const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("inventory/routes", () => {
  const token = "I owe you a token";
  const jwtToken = "I owe you a JWT token";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get route by id", () => {
    axiosMock.onGet("/routes/1").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.routes.get({token, routeId: 1});
  });

  it("should get prices", () => {
    axiosMock.onGet("/routes/prices").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.routes.prices({token, productId: 1, originId: 1, destinationId: 1, channel: "backoffice"}, {});
  });

  it("should get all the routes", () => {
    axiosMock.onGet("/routes").reply(expectRequest({statusCode: 200, token}));
    return api.inventory.routes.all({token});
  });

  it("should create a route", () => {
    axiosMock.onPost("/routes").reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.inventory.routes.create({
      jwtToken,
      token,
      data: {
        name: "12 - Burlington Carpool "
      }
    });
  });

  it("should get prices", () => {
    const routeId = "1";
    axiosMock.onGet(`/routes/${routeId}/stations`).reply(expectRequest({statusCode: 200, token}));
    return api.inventory.routes.stations({token, routeId});
  });

  it("should get a fare-table", () => {
    axiosMock.onGet("/routes/fare-tables").reply(expectRequest({
      statusCode: 200, token
    }));
    return api.inventory.routes.fareTables.all({
      token
    });
  });

  it("should create a fare-table", () => {
    const routeId = "1";
    const fareTable = {};
    axiosMock.onPost(`/routes/${routeId}/fare-tables`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.fareTables.create({
      jwtToken, token, routeId, fareTable
    });
  });

  it("should update a fare-table", () => {
    const routeId = "1";
    const fareTableId = "2";
    const fareTable = {};
    axiosMock.onPut(`/routes/${routeId}/fare-tables/${fareTableId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.fareTables.update({
      jwtToken, token, routeId, fareTableId, fareTable
    });
  });

  it("should create a stop", () => {
    const routeId = "11";
    const stop = {stopId: "22"};
    axiosMock.onPost(`/routes/${routeId}/stops`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.stops.create({
      token, jwtToken, routeId, stop
    });
  });

  it("should update a route", () => {
    const routeId = "507f1f77bcf86cd799439011";
    const data = {
      name: "Updated Route Name"
    };
    axiosMock.onPut(`/routes/${routeId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.update({
      token, jwtToken, routeId, data
    });
  });

  it("should delete a route", () => {
    const routeId = "507f1f77bcf86cd799439011";
    axiosMock.onDelete(`/routes/${routeId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.remove({
      token, jwtToken, routeId
    });
  });

  it("should get fare-rules", () => {
    const routeId = "507f1f77bcf86cd799439011";
    axiosMock.onGet(`/routes/${routeId}/fare-rules`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.fareRules.get({
      jwtToken, token, routeId
    });
  });

  it("should create a fare-rule", () => {
    const routeId = "507f1f77bcf86cd799439011";
    const fareRule = {
      name: "Summer Pricing",
      dates: {
        from: "2024-06-01",
        to: "2024-08-31"
      },
      buckets: {
        "bucket-1": 150,
        "bucket-2": 200
      }
    };
    axiosMock.onPost(`/routes/${routeId}/fare-rules`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.fareRules.create({
      jwtToken, token, routeId, fareRule
    });
  });

  it("should update a fare-rule", () => {
    const routeId = "507f1f77bcf86cd799439011";
    const fareRuleId = "summer-pricing";
    const fareRule = {
      name: "Updated Summer Pricing",
      dates: {
        from: "2024-06-01",
        to: "2024-08-31"
      },
      buckets: {
        "bucket-1": 175,
        "bucket-2": 225
      }
    };
    axiosMock.onPut(`/routes/${routeId}/fare-rules/${fareRuleId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.fareRules.update({
      jwtToken, token, routeId, fareRuleId, fareRule
    });
  });

  it("should delete a fare-rule", () => {
    const routeId = "507f1f77bcf86cd799439011";
    const fareRuleId = "summer-pricing";
    axiosMock.onDelete(`/routes/${routeId}/fare-rules/${fareRuleId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.fareRules.remove({
      jwtToken, token, routeId, fareRuleId
    });
  });

  it("should get price-buckets", () => {
    const routeId = "507f1f77bcf86cd799439011";
    axiosMock.onGet(`/routes/${routeId}/price-buckets`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.priceBuckets.get({
      jwtToken, token, routeId
    });
  });

  it("should create a price-bucket", () => {
    const routeId = "507f1f77bcf86cd799439011";
    const bucket = {
      name: "Premium Bucket",
      id: "premium-bucket"
    };
    axiosMock.onPost(`/routes/${routeId}/price-buckets`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.priceBuckets.create({
      jwtToken, token, routeId, bucket
    });
  });

  it("should update a price-bucket", () => {
    const routeId = "507f1f77bcf86cd799439011";
    const bucketId = "premium-bucket";
    const bucket = {
      name: "Updated Premium Bucket"
    };
    axiosMock.onPut(`/routes/${routeId}/price-buckets/${bucketId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.priceBuckets.update({
      jwtToken, token, routeId, bucketId, bucket
    });
  });

  it("should delete a price-bucket", () => {
    const routeId = "507f1f77bcf86cd799439011";
    const bucketId = "premium-bucket";
    axiosMock.onDelete(`/routes/${routeId}/price-buckets/${bucketId}`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.priceBuckets.remove({
      jwtToken, token, routeId, bucketId
    });
  });

  it("should get cross-border-distances", () => {
    const routeId = "507f1f77bcf86cd799439011";
    axiosMock.onGet(`/routes/${routeId}/cross-border-distances`).reply(expectRequest({
      statusCode: 200, token
    }));
    return api.inventory.routes.crossBorderDistances.get({
      token, routeId
    });
  });

  it("should update cross-border-distances", () => {
    const routeId = "507f1f77bcf86cd799439011";
    const crossBorderDistances = {
      "stop-1": {
        "stop-2": 150,
        "stop-3": 200
      }
    };
    axiosMock.onPut(`/routes/${routeId}/cross-border-distances`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.crossBorderDistances.update({
      jwtToken, token, routeId, crossBorderDistances
    });
  });

  it("should get all the proration-tables", () => {
    axiosMock.onGet("/routes/proration-tables").reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.prorationTables.all({
      jwtToken, token
    });
  });

  it("should get a proration-table by routeId", () => {
    const routeId = "507f1f77bcf86cd799439011";
    axiosMock.onGet("/routes/proration-tables", {params: {routeId}}).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.prorationTables.all({
      jwtToken, token, query: {routeId}
    });
  });

  it("should get a proration-table by productId", () => {
    const productId = "507f1f77bcf86cd799439012";
    axiosMock.onGet("/routes/proration-tables", {params: {productId}}).reply(expectRequest({
      statusCode: 200, token, jwtToken, query: {productId}
    }));
    return api.inventory.routes.prorationTables.all({
      jwtToken, token, query: {productId}
    });
  });

  it("should get a proration-table without productId", () => {
    const routeId = "507f1f77bcf86cd799439011";
    axiosMock.onGet(`/routes/${routeId}/proration-tables`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.prorationTables.getByRouteId({
      jwtToken, token, routeId
    });
  });

  it("should get a proration-table with productId", () => {
    const routeId = "507f1f77bcf86cd799439011";
    const productId = "507f1f77bcf86cd799439012";
    axiosMock.onGet(`/routes/${routeId}/proration-tables`, {params: {productId}}).reply(expectRequest({
      statusCode: 200, token, jwtToken, query: {productId}
    }));
    return api.inventory.routes.prorationTables.getByRouteId({
      jwtToken, token, routeId, productId
    });
  });

  it("should update a proration-table", () => {
    const routeId = "507f1f77bcf86cd799439011";
    const prorationTable = {
      productId: "507f1f77bcf86cd799439012",
      faresById: {
        "stop-1": {
          "stop-2": 100,
          "stop-3": 150
        }
      }
    };
    axiosMock.onPut(`/routes/${routeId}/proration-tables`).reply(expectRequest({
      statusCode: 200, token, jwtToken
    }));
    return api.inventory.routes.prorationTables.updateByRouteId({
      jwtToken, token, routeId, prorationTable
    });
  });
});
