"use strict";

var _require = require("./../endpoints_helpers"),
    authorizationHeaders = _require.authorizationHeaders;

function printSettingsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function all(_ref2) {
    var token = _ref2.token,
        query = _ref2.query,
        headers = _ref2.headers;

    return client({
      url: "/print-templates",
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref3) {
    var token = _ref3.token,
        query = _ref3.query,
        headers = _ref3.headers,
        printTemplateId = _ref3.printTemplateId;

    return client({
      url: "/print-templates/" + printTemplateId,
      params: query,
      headers: authorizationHeaders({ token: token, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function update(_ref4) {
    var jwtToken = _ref4.jwtToken,
        token = _ref4.token,
        printTemplateId = _ref4.printTemplateId,
        printTemplate = _ref4.printTemplate,
        headers = _ref4.headers;

    return client({
      url: "/print-templates/" + printTemplateId,
      method: "put",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        printTemplate: printTemplate
      }
    });
  }

  function create(_ref5) {
    var jwtToken = _ref5.jwtToken,
        token = _ref5.token,
        printTemplate = _ref5.printTemplate,
        headers = _ref5.headers;

    return client({
      url: "/print-templates",
      method: "post",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      }),
      data: {
        printTemplate: printTemplate
      }
    });
  }

  function remove(_ref6) {
    var printTemplateId = _ref6.printTemplateId,
        token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        headers = _ref6.headers;

    return client({
      url: "/print-templates/" + printTemplateId,
      method: "delete",
      headers: authorizationHeaders({
        token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers
      })
    });
  }

  return {
    all: all,
    get: get,
    update: update,
    create: create,
    remove: remove
  };
}

module.exports = printSettingsFactory;