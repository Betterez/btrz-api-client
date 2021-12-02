"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function promosFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;


  function all(_ref2) {
    var token = _ref2.token,
        _ref2$query = _ref2.query,
        query = _ref2$query === undefined ? {} : _ref2$query,
        headers = _ref2.headers;

    return client.get("/promos", {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var promoId = _ref3.promoId,
        token = _ref3.token,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client.get("/promos/" + promoId, {
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var jwtToken = _ref4.jwtToken,
        promo = _ref4.promo,
        token = _ref4.token,
        headers = _ref4.headers;

    return client({
      url: "/promos",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { promo: promo }
    });
  }

  function remove(_ref5) {
    var jwtToken = _ref5.jwtToken,
        promoId = _ref5.promoId,
        token = _ref5.token,
        headers = _ref5.headers;

    return client({
      url: "/promos/" + promoId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref6) {
    var jwtToken = _ref6.jwtToken,
        token = _ref6.token,
        promoId = _ref6.promoId,
        update = _ref6.update,
        headers = _ref6.headers;

    return client({
      url: "/promos/" + promoId,
      method: "patch",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { update: update }
    });
  }

  function addRule(_ref7) {
    var jwtToken = _ref7.jwtToken,
        token = _ref7.token,
        promoId = _ref7.promoId,
        rule = _ref7.rule,
        headers = _ref7.headers;

    return client({
      url: "/promos/" + promoId + "/rules",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { rule: rule }
    });
  }

  function updateRule(_ref8) {
    var jwtToken = _ref8.jwtToken,
        token = _ref8.token,
        promoId = _ref8.promoId,
        ruleId = _ref8.ruleId,
        rule = _ref8.rule,
        headers = _ref8.headers;

    return client({
      url: "/promos/" + promoId + "/rules/" + ruleId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { rule: rule }
    });
  }

  return {
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove,
    addRule: addRule,
    updateRule: updateRule
  };
}

module.exports = promosFactory;