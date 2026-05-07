

const _require = require("../endpoints_helpers.js");
const authorizationHeaders = _require.authorizationHeaders;

function cancellationSettingsFactory(_ref) {
  const client = _ref.client;
  const internalAuthTokenProvider = _ref.internalAuthTokenProvider;

  function get(_ref2) {
    const token = _ref2.token;
    const jwtToken = _ref2.jwtToken;
    const headers = _ref2.headers;

    return client({
      url: "/cancellation-settings",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function update(_ref3) {
    const token = _ref3.token;
    const jwtToken = _ref3.jwtToken;
    const data = _ref3.data;
    const headers = _ref3.headers;

    return client({
      url: "/cancellation-settings",
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    get,
    update
  };
}

module.exports = cancellationSettingsFactory;
