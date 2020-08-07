"use strict";

function docsFactory(_ref) {
  var client = _ref.client;

  function get() {
    return client.get("/api-docs-v2", {});
  }

  return {
    get: get
  };
}

module.exports = docsFactory;