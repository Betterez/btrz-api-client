/* eslint-disable import/extensions */
const {authorizationHeaders} = require("./../endpoints_helpers");

function seatClassesFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      url: "/seatclasses",
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function get({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/seatclasses/${id}`,
      method: "get",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function update({token, jwtToken, id, data, query = {}, headers}) {
    return client({
      url: `/seatclasses/${id}`,
      method: "put",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  function remove({token, jwtToken, id, query = {}, headers}) {
    return client({
      url: `/seatclasses/${id}`,
      method: "delete",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query
    });
  }

  function create({token, jwtToken, data, query = {}, headers}) {
    return client({
      url: "/seatclasses",
      method: "post",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers}),
      params: query,
      data
    });
  }

  return {
    all,
    get,
    update,
    remove,
    create
  };
}

module.exports = seatClassesFactory;
