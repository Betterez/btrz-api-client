const {authorizationHeaders} = require("./../endpoints_helpers.js");

function s3BucketsFactory({client, internalAuthTokenProvider}) {
  function update({jwtToken, token, bucketId, application, headers}) {
    return client({
      url: `/account/s3Buckets/${bucketId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {application}
    });
  }

  function remove({jwtToken, token, bucketId, headers}) {
    return client({
      url: `/account/s3Buckets/${bucketId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, application, headers}) {
    return client({
      url: "/account/s3Buckets",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {application}
    });
  }

  return {
    update,
    remove,
    create
  };
}

module.exports = s3BucketsFactory;
