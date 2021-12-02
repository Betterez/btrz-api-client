const { authorizationHeaders } = require("./../endpoints_helpers");

function programsFactory({ client, internalAuthTokenProvider }) {
  
  function all({ token, context, query = {}, headers }) {
    const queryObj = Object.assign({}, query, {context});
    
    return client({
      url: "/programs",
      params: queryObj,
      headers: authorizationHeaders({token, internalAuthTokenProvider, headers})
    });
  }

  function create({ token, jwtToken, program, headers }) {
    return client({
      url: "/programs",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: program
    });
  }

  function put({ token, jwtToken, programId, program, headers }) {
    return client({
      url: `/programs/${programId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      data: program
    });
  }

  return {
    all,
    create,
    put
  };

}

module.exports = programsFactory;