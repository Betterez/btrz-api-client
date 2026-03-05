"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function smsTemplatesFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function getTypes(_ref2) {
    var token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        headers = _ref2.headers;

    return client({
      url: "/sms-templates/types",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function all(_ref3) {
    var token = _ref3.token,
        jwtToken = _ref3.jwtToken,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query,
        headers = _ref3.headers;

    return client({
      url: "/sms-templates",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function get(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        smsTemplateId = _ref4.smsTemplateId,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        headers = _ref4.headers;

    return client({
      url: "/sms-templates/" + smsTemplateId,
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        data = _ref5.data,
        headers = _ref5.headers;

    return client({
      url: "/sms-templates",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function update(_ref6) {
    var token = _ref6.token,
        jwtToken = _ref6.jwtToken,
        smsTemplateId = _ref6.smsTemplateId,
        data = _ref6.data,
        headers = _ref6.headers;

    return client({
      url: "/sms-templates/" + smsTemplateId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  function remove(_ref7) {
    var token = _ref7.token,
        jwtToken = _ref7.jwtToken,
        smsTemplateId = _ref7.smsTemplateId,
        headers = _ref7.headers;

    return client({
      url: "/sms-templates/" + smsTemplateId,
      method: "delete",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function createSub(_ref8) {
    var token = _ref8.token,
        jwtToken = _ref8.jwtToken,
        mainTemplateId = _ref8.mainTemplateId,
        agencyId = _ref8.agencyId,
        headers = _ref8.headers;

    return client({
      url: "/sub-sms-templates",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: { mainTemplateId: mainTemplateId, agencyId: agencyId }
    });
  }

  var versions = {
    update: function update(_ref9) {
      var token = _ref9.token,
          jwtToken = _ref9.jwtToken,
          smsTemplateId = _ref9.smsTemplateId,
          versionId = _ref9.versionId,
          _ref9$query = _ref9.query,
          query = _ref9$query === undefined ? {} : _ref9$query,
          headers = _ref9.headers;

      return client({
        url: "/sms-templates/" + smsTemplateId + "/versions/" + versionId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        params: query
      });
    }
  };

  return {
    getTypes: getTypes,
    all: all,
    get: get,
    create: create,
    update: update,
    remove: remove,
    createSub: createSub,
    versions: versions
  };
}

module.exports = smsTemplatesFactory;