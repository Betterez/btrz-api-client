const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe.only("inventory/ssrs", () => {

  it("should list ssrs", () => {
    const query = {
      productIds: "5a3bfb0c8ac455703e99b526",
      tripId: "eyJhY2NvdW50SWQiOiI0Zjc0YTIzNWIwZGZmYzAyMTAwMDAwMTUiLCJwcm9kdWN0SWQiOiI1YTNiZmIwYzhhYzQ1NTcwM2U5OWI1MjYiLCJvcmlnaW5JZCI6IjUxZWQyYWY3Y2YyYzgxOWQ1ZTAwMDAwNSIsImRlc3RpbmF0aW9uSWQiOiI1MWIwYjBmNzMxYzcyOWI3NWMwMDAxNjIiLCJmYXJlSWRzIjoiNGY3NGI3MThiMGRmZmMwMjEwMDAwMDQxOjEiLCJkZXBhcnR1cmVEYXRlIjoiMjAxOC0wMS0xOCIsImRlcGFydHVyZVRpbWUiOiIwOTowMCIsImNoYW5uZWwiOiJ3ZWJzYWxlcyIsInNlZ21lbnRzIjpbeyJyb3V0ZUlkIjoiNTZmYWVhYTdkMmM0YmRjMTFiMDAwMGI0Iiwic2NoZWR1bGVJZCI6IjZmZmY5NjU0LTg5YWQtNDRkOS1hMmU1LTNmNWNhNmE3YmE0NiIsIm9yaWdpbiI6IkR1YmxpbiIsImRlc3RpbmF0aW9uIjoiVG9yb250byJ9XSwidGlja2V0VHlwZSI6Im9uZXdheSJ9"
    };
    return api.inventory.ssrs.all({ token, query })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200))
  });

});