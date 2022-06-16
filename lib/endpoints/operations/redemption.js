"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function redemptionFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function create(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        redemption = _ref2.redemption,
        headers = _ref2.headers;

    return client({
      url: "/redemptions",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: redemption
    });
  }

  function getValidate(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        passId = _ref3.passId,
        timezone = _ref3.timezone,
        headers = _ref3.headers;

    return client({
      url: "/redemptions/validate/" + passId,
      params: { timezone: timezone },
      method: "get",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function unredeem(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        data = _ref4.data,
        headers = _ref4.headers;

    return client({
      url: "/unredeem",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  return {
    create: create,
    getValidate: getValidate,
    unredeem: unredeem
  };
}

module.exports = redemptionFactory;