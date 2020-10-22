const {authorizationHeaders} = require("./../endpoints_helpers");

function seatmapsFactory({client, internalAuthTokenProvider}) {
  function get({seatmapId, routeId, scheduleId, manifestDate, query = {}, token}) {
    return client.get(`/seatmaps/${seatmapId}/available-seats/${routeId}/${scheduleId}/${manifestDate}`, {
      params: query,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  return {
    get
  };
}

module.exports = seatmapsFactory;
