"use strict";

var url = require("url");

function insurancesFactory(_ref) {
  var client = _ref.client;


  function all(_ref2) {
    var token = _ref2.token;

    return client.get("/insurances/", {
      headers: { 'x-api-key': "" + token }
    });
  }

  function create(_ref3) {
    var token = _ref3.token,
        insurance = _ref3.insurance;

    return client.post("/insurances/", {
      headers: { 'x-api-key': "" + token },
      data: insurance
    });
  }

  function enabled(_ref4) {
    var token = _ref4.token,
        insurance = _ref4.insurance;

    var one = url.resolve("/insurances/", insurance._id);
    console.log(one);
    return client.patch(one, {
      headers: { 'x-api-key': "" + token },
      data: { enabled: insurance.enabled }
    });
  }

  return {
    all: all,
    create: create,
    enabled: enabled
  };
}

module.exports = insurancesFactory;