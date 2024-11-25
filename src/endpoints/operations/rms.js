const {
  authorizationHeaders
} = require("./../endpoints_helpers.js");

function rmsFactory({
  client, internalAuthTokenProvider
}) {
  const manifestForecasts = {
    all({
      token,
      jwtToken,
      query = {},
      headers
    }) {
      return client.get("/rms/manifest-forecast", {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    get({
      scheduleId,
      token,
      jwtToken,
      query = {},
      headers
    }) {
      return client.get(`/rms/manifest-forecast/${scheduleId}`, {
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    manifestForecasts
  };
}

module.exports = rmsFactory;
