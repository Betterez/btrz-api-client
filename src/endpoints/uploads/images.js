"use strict";

const { authorizationHeaders } = require("./../endpoints_helpers");

function imagesFactory({ client, internalAuthTokenProvider }) {

  function create({ token, jwtToken, formData, headers }) {
    // Only required to support integration tests
    const formHeaders = typeof formData.getHeaders === "function" ? formData.getHeaders() : {};

    return client({
      url: "/images",
      method: "post",
      headers: {
        ...authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        ...formHeaders
      },
      data: formData
    });
  }

  return {
    create,
  };
}

module.exports = imagesFactory;
