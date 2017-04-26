'use strict';

function stationsFactory(_ref) {
  var client = _ref.client;


  function get(_ref2) {
    var token = _ref2.token,
        id = _ref2.id;

    return client.get('/station/' + id, {
      headers: { 'x-api-key': '' + token }
    });
  }

  function all(_ref3) {
    var token = _ref3.token,
        _ref3$query = _ref3.query,
        query = _ref3$query === undefined ? {} : _ref3$query;

    return client.get("/stations", {
      params: query,
      headers: { 'x-api-key': '' + token }
    });
  }

  return {
    get: get,
    all: all
  };
}

module.exports = stationsFactory;