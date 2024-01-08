const { authorizationHeaders } = require("./../endpoints_helpers");

function operatingCompaniesFactory({ client, internalAuthTokenProvider }) {

  function all({ token, jwtToken, query = {}, headers }) {
    return client({
      url: "/operating-companies",
      params: query,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
    });
  }

  function create({ token, jwtToken, operatingCompany, headers }) {
    return client({
      url: "/operating-companies",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { operatingCompany }
    });
  }

  function update({ jwtToken, token, operatingCompanyId, operatingCompany, headers }) {
    return client({
      url: `/operating-companies/${operatingCompanyId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: { operatingCompany }
    });
  }

  function get({token, operatingCompanyId, jwtToken, headers}) {
    return client({
      url: `/operating-companies/${operatingCompanyId}`,
      method: "get",
      headers: authorizationHeaders({token, internalAuthTokenProvider, jwtToken, headers}),
    });
  }

  const sequences = {
    create({jwtToken, token, operatingCompanyId, sequence, headers}) {
      return client({
        url: `/operating-companies/${operatingCompanyId}/sequences`,
        method: "post",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
        data: sequence
      });
    },
    all({jwtToken, token, operatingCompanyId, headers}) {
      return client({
        url: `/operating-companies/${operatingCompanyId}/sequences`,
        method: "get",
        headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
      });
    }
  };

  return {
    all,
    create,
    update,
    get,
    sequences
  };
}

module.exports = operatingCompaniesFactory;
