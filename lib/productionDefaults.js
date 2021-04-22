"use strict";

module.exports = {
  baseURL: "https://api.betterez.com",
  timeout: 15000,
  baseURLOverride: {
    inventory: function inventory(url) {
      return url + "/inventory";
    },
    trips: function trips(url) {
      return url + "/inventory";
    }
  }
};