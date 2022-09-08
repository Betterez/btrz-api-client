/* eslint-disable import/extensions */
const {authorizationHeaders} = require("./../endpoints_helpers");

function ImagesFactory({client, internalAuthTokenProvider}) {
  function all({token, jwtToken, query = {}, headers}) {
    return client({
      params: query,
      url: "/images",
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function get({token, jwtToken, query = {}, headers, imageId}) {
    return client({
      params: query,
      url: `/images/${imageId}`,
      headers: authorizationHeaders({token, jwtToken, internalAuthTokenProvider, headers})
    });
  }

  function create({jwtToken, token, image, headers}) {
    return client({
      url: "/images",
      method: "post",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers}),
      data: {
        image
      }
    });
  }

  function remove({imageId, token, jwtToken, headers}) {
    return client({
      url: `/images/${imageId}`,
      method: "delete",
      headers: authorizationHeaders({
        token, jwtToken, internalAuthTokenProvider, headers
      })
    });
  }

  return {
    all,
    get,
    create,
    remove
  };
}

module.exports = ImagesFactory;
