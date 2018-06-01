const { axiosMock } = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({ baseURL: "http://test.com" });

describe('uploads/files', () => {
  const token = 'I owe you a token';

  afterEach(() => {
    axiosMock.reset();
  });

  it("should upload the provided form data", () => {
    axiosMock.onPost(`/files`).reply(function({ headers, method }) {
      if(headers['x-api-key'] && headers['x-api-key'] === token &&
        method === "post") {
        return [200];
      }
    });

    return api.uploads.files.upload({
      token,
      // Not real form data
      formData: {
        type: "journey-prices",
        file: null,
        cbType: "email",
        cbValue: "noreply@betterez.com",
      }
    });
  });
});
