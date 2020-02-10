const {authorizationHeaders} = require("./../endpoints_helpers");

function trustedMachinesFactory({client, internalAuthTokenProvider}) {
  function create({token, jwtToken, data}) {
    return client({
      url: "/trusted-machines",
      method: "post",
      withCredentials: true,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data
    });
  }

  return {
    create
  };
}

module.exports = trustedMachinesFactory;
