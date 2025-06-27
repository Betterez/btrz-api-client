// /transport-regulations/cnrt/manifests
const {
  authorizationHeaders
} = require("../endpoints_helpers.js");

function transportRegulationsFactory({client, internalAuthTokenProvider}) {
  const cnrt = {
    create({data, token, jwtToken, headers}) {
      return client({
        url: "/transport-regulations/cnrt/manifests",
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data
      });
    }
  };

  return {
    cnrt
  };
}

module.exports = transportRegulationsFactory;
