const {axiosMock, expectRequest} = require("./../../test-helpers.js");
const api = require("./../../../src/client.js").createApiClient({baseURL: "http://test.com"});

describe("accounts/account/s3Buckets", () => {
  const token = "I owe you a token";
  const jwtToken = "secret";

  afterEach(() => {
    axiosMock.reset();
  });

  it("should update an existing s3Bucket", () => {
    const application = {
      name: "A"
    };
    const bucketId = "somebucketId";

    axiosMock.onPut(`/account/s3Buckets/${bucketId}`)
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.s3Buckets.update({token, jwtToken, bucketId, application});
  });

  it("should remove an s3Bucket", () => {
    const bucketId = "somebucketId";

    axiosMock.onDelete(`/account/s3Buckets/${bucketId}`)
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.s3Buckets.remove({token, jwtToken, bucketId});
  });

  it("should create an s3Bucket", () => {
    const application = {
      name: "A"
    };

    axiosMock.onPost("/account/s3Buckets")
      .reply(expectRequest({statusCode: 200, token, jwtToken}));
    return api.accounts.s3Buckets.create({token, jwtToken, application});
  });
});
