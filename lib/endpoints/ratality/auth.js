"use strict";

function authFactory(_ref) {
  var client = _ref.client;

  function create(_ref2) {
    var data = _ref2.data,
        headers = _ref2.headers;

    return client({
      url: "/authenticate",
      method: "post",
      headers: headers,
      data: data
    });
  }

  return {
    create: create
  };
}

module.exports = authFactory;