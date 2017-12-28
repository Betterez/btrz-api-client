const { expect } = require("chai");

const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    inventory: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");  

describe.only("inventory/filtered-trips", function() {

  it("should filter a trip", function() {
    const tripSegmentsId = "eyJhY2NvdW50SWQiOiI0Zjc0YTIzNWIwZGZmYzAyMTAwMDAwMTUiLCJwcm9kdWN0SWQiOiI1YTNiZmIwYzhhYzQ1NTcwM2U5OWI1MjYiLCJvcmlnaW5JZCI6IjUxZWQyYWY3Y2YyYzgxOWQ1ZTAwMDAwNSIsImRlc3RpbmF0aW9uSWQiOiI1MWIwYjBmNzMxYzcyOWI3NWMwMDAxNjIiLCJzZWdtZW50cyI6W3sic2NoZWR1bGVJZCI6IjZmZmY5NjU0LTg5YWQtNDRkOS1hMmU1LTNmNWNhNmE3YmE0NiIsInNjaGVkdWxlRGlzcGxheU5hbWUiOiJNb3JuaW5nIiwib3JpZ2luIjoiRHVibGluIiwiZGVzdGluYXRpb24iOiJUb3JvbnRvIiwic3RvcHMiOlsiRHVibGluIiwiSW5kaWEiLCJCZW5kIiwiVG9yb250byJdfV0sIm9yaWdpbiI6IkR1YmxpbiIsImRlc3RpbmF0aW9uIjoiVG9yb250byJ9";
    return api.inventory.filteredTrips.create({ token, jwtToken, tripSegmentsId });
  });

});