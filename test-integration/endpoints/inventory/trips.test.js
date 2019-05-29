const port = process.env.TRIPS_API_PORT;
const token = process.env.API_TOKEN;

const api = require("./../../../src/client").createApiClient({ 
  baseURL: `http://localhost:${port}`, 
  baseURLOverride: {
    trips: (baseUrl) => `${baseUrl}/inventory`
  }
});

const { matchHeaders, statusCode } = require("./../../test-integration-helpers");

describe("inventory/trips", function() {

  it("should list trips", function() {
    const query = {
      productId: "595f9c7007ee12686d000033",
      originId: "599602791c926ad5506cddc4",
      destinationId: "599602a01c926ad5506cddc5",
      fareIds: "595f9f62df9127b11d5e03bd:1",
      departureDate: "2017-12-21"
    }
    return api.inventory.trips.all({ token, query })
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200))
      .then((res) => {
        console.log(JSON.stringify(res.data));
      })
  });

  it("should get trip by id", function() {
    return api.inventory.trips.get({token, id: "eyJhY2NvdW50SWQiOiI1OTVmOWM3MDA3ZWUxMjY4NmQwMDAwMzIiLCJwcm9kdWN0SWQiOiI1YTcyMTM4YzNjNzA5ZTUyMGYwMDAwMmMiLCJvcmlnaW5JZCI6IjU5OTYwMjc5MWM5MjZhZDU1MDZjZGRjNCIsImRlc3RpbmF0aW9uSWQiOiI1OTk2MDJhMDFjOTI2YWQ1NTA2Y2RkYzUiLCJmYXJlSWRzIjoiNTk1ZjlmNjJkZjkxMjdiMTFkNWUwM2JkOjEiLCJkZXBhcnR1cmVEYXRlIjoiMjAxOS0wNS0zMCIsImRlcGFydHVyZVRpbWUiOiIwODowMCIsInRyaXBEaXJlY3Rpb24iOiJvdXRib3VuZCIsImNoYW5uZWwiOiJiYWNrb2ZmaWNlIiwic2VnbWVudHMiOlt7InJvdXRlSWQiOiI1YTcyMTQ2MDNjNzA5ZTUyMGYwMDAwNDciLCJzY2hlZHVsZUlkIjoiZmQzNGQ2YmItNTFkYS00NTZjLTk3OTQtZmE3MzEyNzViMTkwIiwib3JpZ2luIjoiRHVibGluIiwiZGVzdGluYXRpb24iOiJFZG1vbmQifV0sImZhcmVzIjpbXSwiZmFyZUNsYXNzZXMiOlt7ImlkIjoiNWE3MjFhOTYxNmM0NTEyMjZhZGYyYTc3IiwiZmFyZXMiOlt7ImlkIjoiNTk1ZjlmNjJkZjkxMjdiMTFkNWUwM2JkIiwidmFsdWUiOjcwMDAwMDAsImpvdXJuZXlQcmljZUlkIjoiNWNlNDZiZjg3ZWNjZWQxNTdlMTI4N2RhIiwiam91cm5leVByaWNlVmVyc2lvbklkIjoiNWNlNDZiZjgxNGRiZDQyMjA1OTRkM2JhIn1dfSx7ImlkIjoiNWMxM2M5OTE0ODY1NmU0YTE2NDk5ZjdmIiwiZmFyZXMiOlt7ImlkIjoiNTk1ZjlmNjJkZjkxMjdiMTFkNWUwM2JkIiwidmFsdWUiOjcwMDAwMDAsImpvdXJuZXlQcmljZUlkIjoiNWNlNDZiZjg3ZWNjZWQxNTdlMTI4N2RhIiwiam91cm5leVByaWNlVmVyc2lvbklkIjoiNWNlNDZiZjgxNGRiZDQyMjA1OTRkM2JhIn1dfV0sInRpY2tldFR5cGUiOiJvbmV3YXkifQ"})
      .then(matchHeaders('x-api-key'))
      .then(statusCode(200));
  });

});