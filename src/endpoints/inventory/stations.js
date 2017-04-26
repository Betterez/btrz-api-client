function stationsFactory({client}) {

  function get({ token, id }) {
    return client.get(`/station/${id}`, {
      headers: { 'x-api-key': `${token}`}
    });
  }

  function all({ token, query = {} }) {
    return client.get("/stations", {
      params: query,   
      headers: { 'x-api-key': `${token}`}
    });
  }

  return { 
    get,
    all
  };

}

module.exports = stationsFactory;