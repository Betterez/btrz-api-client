const { authorizationHeaders } = require("./../endpoints_helpers");

function healthCheckFactory({client, internalAuthTokenProvider}) {
  function get() {
    return client({
      url: "/healthcheck",
      method: "get"
    });
  }

  return {
    get
  };
}

module.exports = healthCheckFactory;
