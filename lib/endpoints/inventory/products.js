"use strict";

function productsFactory(_ref) {
  var client = _ref.client;


  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query;

    return client.get("/products", {
      params: query,
      headers: { 'x-api-key': "" + token }
    });
  }

  return {
    all: all
  };
}

module.exports = productsFactory;