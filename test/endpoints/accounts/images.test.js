const {axiosMock, expectRequest} = require("./../../test-helpers");
const api = require("./../../../src/client").createApiClient({baseURL: "http://test.com"});

describe("accounts/images", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should get the images", () => {
    const query = {};

    axiosMock.onGet("/images", {params: query})
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.images.all({token, query});
  });

  it("should get an image by ID", () => {
    const query = {};
    const imageId = "imageId";
    axiosMock.onGet(`/images/${imageId}`, {params: query})
      .reply(expectRequest({statusCode: 200, token}));
    return api.accounts.images.get({token, query, imageId});
  });

  it("should create an image", () => {
    const image = {
      url: "An url"
    };

    axiosMock.onPost("/images")
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.images.create({
      token, jwtToken, image
    });
  });

  it("should delete the image by id", () => {
    const imageId = "A";
    axiosMock.onDelete(`/images/${imageId}`)
      .reply(expectRequest({
        statusCode: 200,
        token,
        jwtToken
      }));
    return api.accounts.images.remove({
      token, jwtToken, imageId
    });
  });
});
