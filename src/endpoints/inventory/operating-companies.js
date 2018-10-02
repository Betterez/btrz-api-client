const { authorizationHeaders } = require("./../endpoints_helpers");

function operatingCompaniesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {} }) {
    return client({
      url: "/operating-companies",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
    });
  }

  function create({ token, jwtToken, operatingCompany }) {
    return client({
      url: "/operating-companies",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { operatingCompany }
    });
  }

  function update({ jwtToken, token, operatingCompanyId, operatingCompany }) {
    return client({ 
      url: `/operating-companies/${operatingCompanyId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: { operatingCompany }
    });
  }

  function get({token, operatingCompanyId, jwtToken}) {
    return client({
      url: `/operating-companies/${operatingCompanyId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken}),
    });
  }

  return {
    all,
    create,
    update,
    get
  };
}

module.exports = operatingCompaniesFactory;
