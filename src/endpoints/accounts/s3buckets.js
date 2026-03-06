const {authorizationHeaders} = require("./../endpoints_helpers.js");

/**
 * Factory for s3Buckets (account) API (btrz-api-accounts).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {{ update: function, remove: function, create: function }}
 */
function s3BucketsFactory({client, internalAuthTokenProvider}) {
  /**
   * PUT /account/s3Buckets/:bucketId - update an S3 bucket.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.bucketId - Bucket id (ObjectId)
   * @param {Object} opts.s3BucketData - Bucket payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function update({jwtToken, token, bucketId, s3BucketData, headers}) {
    return client({
      url: `/account/s3Buckets/${bucketId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: s3BucketData
    });
  }

  /**
   * DELETE /account/s3Buckets/:bucketId - remove an S3 bucket.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {string} opts.bucketId - Bucket id (ObjectId)
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function remove({jwtToken, token, bucketId, headers}) {
    return client({
      url: `/account/s3Buckets/${bucketId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  /**
   * POST /account/s3Buckets - create an S3 bucket.
   * @param {Object} opts
   * @param {string} [opts.token] - API key
   * @param {string} [opts.jwtToken] - JWT or internal auth symbol
   * @param {Object} opts.s3BucketData - Bucket payload
   * @param {Object} [opts.headers] - Optional headers
   * @returns {Promise<import("axios").AxiosResponse>}
   */
  function create({jwtToken, token, s3BucketData, headers}) {
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
