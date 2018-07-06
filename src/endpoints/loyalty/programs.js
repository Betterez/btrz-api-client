const { authorizationHeaders } = require("./../endpoints_helpers");

function programsFactory({ client, internalAuthTokenProvider }) {
  
  function all({ token, context, query = {} }) {
    const queryObj = Object.assign({}, query, {context});
    
    return client({
      url: "/programs",
      params: queryObj,
      headers: authorizationHeaders({token, internalAuthTokenProvider})
    });
  }

  function create({ token, jwtToken, program }) {
    return client({
      url: "/programs",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
      data: program
    });
  }

  function put({ token, jwtToken, programId, program }) {
    return client({
      url: `/programs/${programId}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider}),
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