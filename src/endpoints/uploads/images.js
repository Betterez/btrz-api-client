"use strict";

const { authorizationHeaders } = require("./../endpoints_helpers");

function imagesFactory({ client, internalAuthTokenProvider }) {

  function create({ token, formData }) {
    // Only required to support integration tests
    const formHeaders = typeof formData.getHeaders === "function" ? formData.getHeaders() : {};

    return client({
      url: "/images",
      method: "post",
      headers: {
        ...authorizationHeaders({token, internalAuthTokenProvider}),
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
