const {authorizationHeaders} = require("./../endpoints_helpers");

function trustedMachinesFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, data, headers}) {
    return client({
      url: "/trusted-machines",
      method: "post",
      withCredentials: true,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data
    });
  }

  return {
    create
  };
}

module.exports = trustedMachinesFactory;
