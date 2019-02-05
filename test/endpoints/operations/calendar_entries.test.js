const { axiosMock, expectRequest } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });
const expect = require("chai").expect;

describe('operations/calendar-entries', function() {
  const token = 'I owe you a token';

  afterEach(function() {
    axiosMock.reset();
  });

  it("should get all calendar entries", function() {
    axiosMock.onGet(`/calendar-entries`).reply(expectRequest({ statusCode: 200, token }));
    return api.operations.calendarEntries.all({token});
  });
}); 
