"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function shiftsFactory(_ref) {
  var client = _ref.client;


  function get(_ref2) {
    var token = _ref2.token,
        userId = _ref2.userId;

    return client.get("/shift/user/" + userId, {
      headers: authorizationHeaders({ token: token })
    });
  }

  return {
    get: get
  };
}

module.exports = shiftsFactory;