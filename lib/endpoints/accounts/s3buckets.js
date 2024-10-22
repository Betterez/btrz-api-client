"use strict";

var _require = require("./../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function s3BucketsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function update(_ref2) {
    var jwtToken = _ref2.jwtToken,
        token = _ref2.token,
        bucketId = _ref2.bucketId,
        s3BucketData = _ref2.s3BucketData,
        headers = _ref2.headers;

    return client({
      url: "/account/s3Buckets/" + bucketId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { s3BucketData: s3BucketData }
    });
  }

  function remove(_ref3) {
    var jwtToken = _ref3.jwtToken,
        token = _ref3.token,
        bucketId = _ref3.bucketId,
        headers = _ref3.headers;

    return client({
      url: "/account/s3Buckets/" + bucketId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        s3BucketData = _ref4.s3BucketData,
        headers = _ref4.headers;

    return client({
      url: "/account/s3Buckets",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { s3BucketData: s3BucketData }
    });
  }

  return {
    update: update,
    remove: remove,
    create: create
  };
}

module.exports = s3BucketsFactory;