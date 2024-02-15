const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function vehicleAssignmentFactory({client, internalAuthTokenProvider}) {
  return {
    all({token, jwtToken, query = {}, headers}) {
      return client({
        url: "/vehicle-assignments",
        params: query,
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    get({token, jwtToken, vehicleAssignmentId, headers}) {
      return client.get(`/vehicle-assignments/${vehicleAssignmentId}`, {
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    },
    create({data, token, jwtToken, headers}) {
      return client({
        url: "/vehicle-assignments",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    },
    update({vehicleAssignmentId, data, token, jwtToken, headers}) {
      return client({
        url: `/vehicle-assignments/${vehicleAssignmentId}`,
        method: "put",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    }
  };
}

module.exports = vehicleAssignmentFactory;
