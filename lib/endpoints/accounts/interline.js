"use strict";

var _require = require("../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function interlineFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function getInvitation(_ref2) {
    var token = _ref2.token,
        interlineId = _ref2.interlineId;

    return client.get("/interline/invitations/" + interlineId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function createInvitation(_ref3) {
    var data = _ref3.data,
        token = _ref3.token,
        jwtToken = _ref3.jwtToken;

    return client({
      url: "/interline/invitations",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: data
    });
  }

  function updateInvitation(_ref4) {
    var interlineId = _ref4.interlineId,
        data = _ref4.data,
        token = _ref4.token,
        jwtToken = _ref4.jwtToken;

    return client({
      url: "/interline/invitations/" + interlineId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: data
    });
  }

  function allConsumers(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        _ref5$query = _ref5.query,
        query = _ref5$query === undefined ? {} : _ref5$query;

    return client({
      url: "/interline/consumers",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function updateConsumer(_ref6) {
    var networkId = _ref6.networkId,
        data = _ref6.data,
        token = _ref6.token,
        jwtToken = _ref6.jwtToken;

    return client({
      url: "/interline/consumers/" + networkId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider }),
      data: data
    });
  }

  function allProviders(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        _ref7$query = _ref7.query,
        query = _ref7$query === undefined ? {} : _ref7$query;

    return client({
      url: "/interline/providers",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function getNetwork(_ref8) {
    var token = _ref8.token,
        networkId = _ref8.networkId;

    return client.get("/interline/network/" + networkId, {
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  function removeInterline(_ref9) {
    var interlineId = _ref9.interlineId,
        token = _ref9.token,
        jwtToken = _ref9.jwtToken;

    return client({
      url: "/interline/" + interlineId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider })
    });
  }

  return {
    getInvitation: getInvitation,
    updateInvitation: updateInvitation,
    createInvitation: createInvitation,
    removeInterline: removeInterline,
    allConsumers: allConsumers,
    updateConsumer: updateConsumer,
    allProviders: allProviders,
    getNetwork: getNetwork
  };
}

module.exports = interlineFactory;