"use strict";

/**
 * Default options for createApiClient when no options are passed.
 * @type {{ baseURL: string, timeout: number, baseURLOverride: { inventory: function(string): string, trips: function(string): string } }}
 */
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