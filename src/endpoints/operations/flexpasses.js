const {authorizationHeaders} = require("./../endpoints_helpers");

function flexpassesFactory({client, internalAuthTokenProvider}) {
  function deleteScanBytripId({jwtToken, token, flexpassId, tripId}) {
    return client({
      url: `/flexpasses/${flexpassId}/scannings/${tripId}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider})
    });
  }

  return {
    deleteScanBytripId
  };
}

module.exports = flexpassesFactory;
