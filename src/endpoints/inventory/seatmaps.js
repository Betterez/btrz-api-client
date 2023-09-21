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

  function getById({seatmapId, token, jwtToken, query = {}, headers}) {
    return client.get(`/seatmaps/${seatmapId}`, {
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({token, jwtToken, seatmap, headers}) {
    return client({
      url: "/seatmaps",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        seatmap
      }
    });
  }

  function update({token, jwtToken, seatmapId, seatmap, headers}) {
    return client({
      url: `/seatmaps/${seatmapId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        seatmap
      }
    });
  }

  function remove({token, jwtToken, seatmapId, headers}) {
    return client({
      url: `/seatmaps/${seatmapId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  return {
    all,
    get,
    getById,
    create,
    remove,
    update
  };
}

module.exports = seatmapsFactory;
