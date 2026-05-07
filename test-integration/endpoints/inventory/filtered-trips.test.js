
const port = process.env.INVENTORY_API_PORT;
const token = process.env.API_TOKEN;
const jwtToken = process.env.JWT_TOKEN;

const api = require("./../../../src/client.js").createApiClient({
  baseURL: `http://localhost:${port}`,
  baseURLOverride: {
    inventory: (baseUrl) => { return `${baseUrl}/inventory`; }
  }
});


describe("inventory/filtered-trips", () => {
  it("should filter a trip", () => {
    const tripSegmentsId = "eyJhY2NvdW50SWQiOiI0Zjc0YTIzNWIwZGZmYzAyMTAwMDAwMTUi" +
      "LCJwcm9kdWN0SWQiOiI1YTNiZmIwYzhhYzQ1NTcwM2U5OWI1MjYiLCJvcmlnaW5JZCI6IjUxZWQy" +
      "YWY3Y2YyYzgxOWQ1ZTAwMDAwNSIsImRlc3RpbmF0aW9uSWQiOiI1MWIwYjBmNzMxYzcyOWI3NWMw" +
      "MDAxNjIiLCJzZWdtZW50cyI6W3sic2NoZWR1bGVJZCI6IjZmZmY5NjU0LTg5YWQtNDRkOS1hMmU1" +
      "LTNmNWNhNmE3YmE0NiIsInNjaGVkdWxlRGlzcGxheU5hbWUiOiJNb3JuaW5nIiwib3JpZ2luIjoi" +
      "RHVibGluIiwiZGVzdGluYXRpb24iOiJUb3JvbnRvIiwic3RvcHMiOlsiRHVibGluIiwiSW5kaWEi" +
      "LCJCZW5kIiwiVG9yb250byJdfV0sIm9yaWdpbiI6IkR1YmxpbiIsImRlc3RpbmF0aW9uIjoiVG9y" +
      "b250byJ9";
    return api.inventory.filteredTrips.create({token, jwtToken, tripSegmentsId});
  });
});
