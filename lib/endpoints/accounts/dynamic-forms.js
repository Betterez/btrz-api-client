"use strict";

var _require = require("../endpoints_helpers.js"),
    authorizationHeaders = _require.authorizationHeaders;

function dynamicFormsFactory(_ref) {
  var client = _ref.client,
      internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        token = _ref2.token,
        jwtToken = _ref2.jwtToken,
        dynamicFormId = _ref2.dynamicFormId,
        headers = _ref2.headers;

    return client({
      url: "/dynamic-forms/" + dynamicFormId,
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
      url: "/dynamic-forms",
      params: query,
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
    });
  }

  function create(_ref4) {
    var token = _ref4.token,
        jwtToken = _ref4.jwtToken,
        _ref4$query = _ref4.query,
        query = _ref4$query === undefined ? {} : _ref4$query,
        data = _ref4.data,
        headers = _ref4.headers;

    return client({
      url: "/dynamic-forms",
      method: "post",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      params: query,
      data: data
    });
  }

  function update(_ref5) {
    var token = _ref5.token,
        jwtToken = _ref5.jwtToken,
        dynamicFormId = _ref5.dynamicFormId,
        data = _ref5.data,
        headers = _ref5.headers;

    return client({
      url: "/dynamic-forms/" + dynamicFormId,
      method: "put",
      headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
      data: data
    });
  }

  var fields = {
    get: function get() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          token = _ref6.token,
          jwtToken = _ref6.jwtToken,
          dynamicFormFieldId = _ref6.dynamicFormFieldId,
          headers = _ref6.headers;

      return client({
        url: "/dynamic-forms/fields/" + dynamicFormFieldId,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    all: function all(_ref7) {
      var token = _ref7.token,
          jwtToken = _ref7.jwtToken,
          _ref7$query = _ref7.query,
          query = _ref7$query === undefined ? {} : _ref7$query,
          headers = _ref7.headers;

      return client({
        url: "/dynamic-forms/fields",
        params: query,
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers })
      });
    },
    create: function create(_ref8) {
      var jwtToken = _ref8.jwtToken,
          token = _ref8.token,
          data = _ref8.data,
          headers = _ref8.headers;

      return client({
        url: "/dynamic-forms/fields",
        method: "post",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    },
    update: function update(_ref9) {
      var jwtToken = _ref9.jwtToken,
          token = _ref9.token,
          dynamicFormFieldId = _ref9.dynamicFormFieldId,
          data = _ref9.data,
          headers = _ref9.headers;

      return client({
        url: "/dynamic-forms/fields/" + dynamicFormFieldId,
        method: "put",
        headers: authorizationHeaders({ token: token, jwtToken: jwtToken, internalAuthTokenProvider: internalAuthTokenProvider, headers: headers }),
        data: data
      });
    }
  };

  return {
    get: get,
    all: all,
    create: create,
    update: update,
    fields: fields
  };
}

module.exports = dynamicFormsFactory;