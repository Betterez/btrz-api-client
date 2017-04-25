"use strict";

module.exports = {

  baseURL: "http://betterez.com",
  timeout: 15000,
  baseURLOverride: {
    inventory: function inventory(url) {
      return url + "/inventory";
    }
  }

};