

const _require = require("./../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

/**
 * Factory for s3Buckets (account) API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ update: function, remove: function, create: function }}
 */


function s3BucketsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  /**
   * PUT /account/s3Buckets/:bucketId - update an S3 bucket. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.bucketId - Bucket id (ObjectId)
   * @param {Object} opts.s3BucketData - Bucket payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update(_ref2) {
    const jwtToken = _ref2.jwtToken;
    const token = _ref2.token;
    const bucketId = _ref2.bucketId;
    const s3BucketData = _ref2.s3BucketData;
    const headers = _ref2.headers;

    return client({
      url: `/account/s3Buckets/${bucketId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: s3BucketData
    });
  }

  /**
   * DELETE /account/s3Buckets/:bucketId - remove an S3 bucket. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.bucketId - Bucket id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove(_ref3) {
    const jwtToken = _ref3.jwtToken;
    const token = _ref3.token;
    const bucketId = _ref3.bucketId;
    const headers = _ref3.headers;

    return client({
      url: `/account/s3Buckets/${bucketId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /account/s3Buckets - create an S3 bucket. API does not accept query params.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.s3BucketData - Bucket payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create(_ref4) {
    const jwtToken = _ref4.jwtToken;
    const token = _ref4.token;
    const s3BucketData = _ref4.s3BucketData;
    const headers = _ref4.headers;

    return client({
      url: "/account/s3Buckets",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: s3BucketData
    });
  }

  return {
    update,
    remove,
    create
  };
}

module.exports = s3BucketsFactory;
