const {authorizationHeaders} = require("./../endpoints_helpers");

function seatmapsFactory({client, internalAuthTokenProvider}) {
  function all({token, query = {}, headers}) {
    return client.get("/seatmaps", {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }
  function get({seatmapId, routeId, scheduleId, manifestDate, query = {}, token, headers}) {
    return client.get(`/seatmaps/${seatmapId}/available-seats/${routeId}/${scheduleId}/${manifestDate}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get
  };
}

module.exports = seatmapsFactory;
