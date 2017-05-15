const url = require("url");
const { authorizationHeaders } = require("./../endpoints_helpers");

function insurancesFactory({ client }) {
  
  function all({ token }) {
    return client("/insurances", {
      headers: authorizationHeaders({token})
    });
  }

  function create({ token, insurance, jwtToken }) {
    return client({ 
      url: "/insurances",
      method: "post",
      headers: authorizationHeaders({token, jwtToken}),
      data: { insurance }
    });
  }

  function enabled({ token, insurance, jwtToken }) {
    const one = url.resolve("/insurances/", insurance._id);
    
    return client({
      url: one,
      method: "put",
      headers: authorizationHeaders({token, jwtToken}),
      data: { insurance: { enabled: insurance.enabled } }
    });
  }

  return { 
    all,
    create,
    enabled
  };
}

module.exports = insurancesFactory;