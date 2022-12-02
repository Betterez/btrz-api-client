const {authorizationHeaders} = require("./../endpoints_helpers.js");

function reportEmailFactory({client, internalAuthTokenProvider}) {
  function post({token, jwtToken, report, headers}) {
    return client({
      url: "/email",
      method: "post",
      data: report,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }
  return {
    post
  };
}

module.exports = reportEmailFactory;
